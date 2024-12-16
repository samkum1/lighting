export function bytesToGB(bytes) {
    const gigabytes = bytes / (1024 * 1024 * 1024);
    return gigabytes.toFixed(2);
}