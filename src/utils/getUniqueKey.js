function uniqueId() {
    return `prefix-${Math.random().toString(36).substring(2, 8)}`;
}

export default uniqueId;