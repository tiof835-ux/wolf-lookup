const readline = require("readline");
const {
  exchangeNpssoForAccessCode,
  exchangeAccessCodeForAuthTokens,
  getProfileFromUserName,
  getUserTitles
} = require("psn-api");

const NPSSO = "PON_AQUI_TU_NPSSO";

async function main() {
  try {
    console.log("WOLF PSN LOOKUP TERMINAL\n");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("PSN ID: ", async (username) => {
      try {
        console.log("\nConnecting to PSN...");

        const accessCode = await exchangeNpssoForAccessCode(NPSSO);
        const authTokens = await exchangeAccessCodeForAuthTokens(accessCode);

        const profile = await getProfileFromUserName(
          authTokens.accessToken,
          username
        );

        const titles = await getUserTitles(
          authTokens.accessToken,
          profile.profile.accountId
        );

        console.log("\n=== PROFILE ===");
        console.log("User:", profile.profile.onlineId);
        console.log("Account ID:", profile.profile.accountId);

        console.log("\n=== RECENT GAMES ===");
        titles.titles.slice(0, 5).forEach((game, i) => {
          console.log(`${i + 1}. ${game.name}`);
        });

      } catch (err) {
        console.log("Error:", err.message);
      }

      rl.close();
    });
  } catch (error) {
    console.error(error);
  }
}

main();
