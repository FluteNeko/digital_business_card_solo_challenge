export default function openDiscordApp() {
    var userId = import.meta.env.VITE_DISCORD_USER_ID;

    if (window.navigator && window.navigator.msLaunchUri) {
        window.navigator.msLaunchUri("discord://user?id=" + userId);
    } else if (window.navigator && window.navigator.userAgent.match(/(android|iphone|ipad)/i)) {
        window.location.href = "discord://user?id=" + userId;
    } else {
        window.open("https://discord.com/users/" + userId);
    }
}