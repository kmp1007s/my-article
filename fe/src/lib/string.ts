export function removeTag(text: string) {
    text = text.replace(/&quot;/g, '\"');
    return text.replace(/<\/?[^>]+(>|$)/g, "");
}