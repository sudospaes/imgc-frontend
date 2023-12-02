function newInputHandler(
    dispatch: any,
    setCurrentStage: any,
    inputURL: any,
    outputURL: any

) {
    dispatch(setCurrentStage('Input'));
    URL.revokeObjectURL(inputURL);
    URL.revokeObjectURL(outputURL);
}

export default newInputHandler;