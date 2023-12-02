import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
    name: 'image',
    initialState: {
        imageURL: null,
        outputURL: null,
        imageName: '',
        imageSize: 0,
        outputSize: 0,
        imageWidth: 0,
        imageHeight: 0,
        // 1-95: Default value is 60
        qualityValue: 60,
        // All stages: Input(Default), Confirm, Upload, Output
        currentStage: 'Input',
        // Upload status
        isFailed: false
    },
    reducers: {
        setImageURL: (state, action) => {
            state.imageURL = action.payload
        },
        setImageName: (state, action) => {
            state.imageName = action.payload
        },
        setImageSize: (state, action) => {
            state.imageSize = action.payload
        },
        setImageWidth: (state, action) => {
            state.imageWidth = action.payload
        },
        setImageHeight: (state, action) => {
            state.imageHeight = action.payload
        },
        setCurrentStage: (state, action) => {
            state.currentStage = action.payload
        },
        setOutputURL: (state, action) => {
            state.outputURL = action.payload
        },
        setOutputSize: (state, action) => {
            state.outputSize = action.payload
        },
        setQualityValue: (state, action) => {
            state.qualityValue = action.payload
        },
        setIsFailed: (state, action) => {
            state.isFailed = action.payload
        }

    }
});

export const {
    setImageURL,
    setOutputSize,
    setImageName,
    setImageSize,
    setImageWidth,
    setImageHeight,
    setCurrentStage,
    setOutputURL,
    setQualityValue,
    setIsFailed
} = imageSlice.actions;

export default imageSlice.reducer;