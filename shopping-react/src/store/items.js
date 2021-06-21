import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
//import axios from "axios";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "items",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    itemsRequested: (items, action) => {
      items.loading = true;
    },

    itemsReceived: (items, action) => {
      items.list = action.payload;
      items.loading = false;
      items.lastFetch = Date.now();
    },

    itemsRequestFailed: (items, action) => {
      items.loading = false;
    },

    itemAssignedToUser: (items, action) => {
      const { id: itemId, userId } = action.payload;
      const index = items.list.findIndex(item => item.id === itemId);
      items.list[index].userId = userId;
    },

    // command - event
    // additem - itemAdded
    itemAdded: (items, action) => {
      items.list.push(action.payload);
    },

    // resolveitem (command) - itemResolved (event)
    itemResolved: (items, action) => {
      const index = items.list.findIndex(item => item.id === action.payload.id);
      items.list[index].resolved = true;
    }
  }
});

export const {
  itemAdded,
  itemResolved,
  itemAssignedToUser,
  itemsReceived,
  itemsRequested,
  itemsRequestFailed
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/items";

export const loaditems = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.items;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: itemsRequested.type,
      onSuccess: itemsReceived.type,
      onError: itemsRequestFailed.type
    })
  );
};

export const additem = item =>
  apiCallBegan({
    url,
    method: "post",
    data: item,
    onSuccess: itemAdded.type
  });

export const resolveitem = id =>
  apiCallBegan({
    // /items
    // PATCH /items/1
    url: url + "/" + id,
    method: "patch",
    data: { resolved: true },
    onSuccess: itemResolved.type
  });

export const assignitemToUser = (itemId, userId) =>
  apiCallBegan({
    url: url + "/" + itemId,
    method: "patch",
    data: { userId },
    onSuccess: itemAssignedToUser.type
  });

// Selector

// Memoization
// items => get unresolved items from the cache

export const getitemsByUser = userId =>
  createSelector(
    state => state.entities.items,
    items => items.filter(item => item.userId === userId)
  );

export const getUnresolveditems = createSelector(
  state => state.entities.items,
  state => state.entities.projects,
  (items, projects) => items.list.filter(item => !item.resolved)
);
