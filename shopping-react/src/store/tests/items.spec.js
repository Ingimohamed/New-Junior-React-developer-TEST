import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { loaditems, additem, resolveitem, getUnresolveditems } from "../items";
import configureStore from "../configureStore";

describe("itemsSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const itemsSlice = () => store.getState().entities.items;

  const createState = () => ({
    entities: {
      items: {
        list: []
      }
    }
  });

  describe("loading items", () => {
    describe("if the items exist in the cache", () => {
      it("they should not be fetched from the server again.", async () => {
        fakeAxios.onGet("/items").reply(200, [{ id: 1 }]);

        await store.dispatch(loaditems());
        await store.dispatch(loaditems());

        expect(fakeAxios.history.get.length).toBe(1);
      });
    });

    describe("if the items don't exist in the cache", () => {
      it("they should be fetched from the server and put in the store", async () => {
        fakeAxios.onGet("/items").reply(200, [{ id: 1 }]);

        await store.dispatch(loaditems());

        expect(itemsSlice().list).toHaveLength(1);
      });

      describe("loading indicator", () => {
        it("should be true while fetching the items", () => {
          fakeAxios.onGet("/items").reply(() => {
            expect(itemsSlice().loading).toBe(true);
            return [200, [{ id: 1 }]];
          });

          store.dispatch(loaditems());
        });

        it("should be false after the items are fetched", async () => {
          fakeAxios.onGet("/items").reply(200, [{ id: 1 }]);

          await store.dispatch(loaditems());

          expect(itemsSlice().loading).toBe(false);
        });

        it("should be false if the server returns an error", async () => {
          fakeAxios.onGet("/items").reply(500);

          await store.dispatch(loaditems());

          expect(itemsSlice().loading).toBe(false);
        });
      });
    });
  });

  it("should mark the item as resolved if it's saved to the server.", async () => {
    // AAA
    fakeAxios.onPatch("/items/1").reply(200, { id: 1, resolved: true });
    fakeAxios.onPost("/items").reply(200, { id: 1 });

    await store.dispatch(additem({}));
    await store.dispatch(resolveitem(1));

    expect(itemsSlice().list[0].resolved).toBe(true);
  });

  it("should not mark the item as resolved if it's not saved to the server.", async () => {
    // AAA
    fakeAxios.onPatch("/items/1").reply(500);
    fakeAxios.onPost("/items").reply(200, { id: 1 });

    await store.dispatch(additem({}));
    await store.dispatch(resolveitem(1));

    expect(itemsSlice().list[0].resolved).not.toBe(true);
  });

  it("should add the item to the store if it's saved to the server", async () => {
    const item = { description: "a" };
    const saveditem = { ...item, id: 1 };
    fakeAxios.onPost("/items").reply(200, saveditem);

    await store.dispatch(additem(item));

    expect(itemsSlice().list).toContainEqual(saveditem);
  });

  it("should not add the item to the store if it's not saved to the server", async () => {
    const item = { description: "a" };
    fakeAxios.onPost("/items").reply(500);

    await store.dispatch(additem(item));

    expect(itemsSlice().list).toHaveLength(0);
  });

  describe("selectors", () => {
    it("getUnresolveditems", () => {
      const state = createState();
      state.entities.items.list = [
        { id: 1, resolved: true },
        { id: 2 },
        { id: 3 }
      ];

      const result = getUnresolveditems(state);

      expect(result).toHaveLength(2);
    });
  });
});
