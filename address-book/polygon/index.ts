import { beefyfinance } from "./platforms/beefyfinance";
import { cometh } from "./platforms/cometh";
import { dfyn } from "./platforms/dfyn";
import { polyzap } from "./platforms/polyzap";
import { quickswap } from "./platforms/quickswap";
import { sushi } from "./platforms/sushi";
import { goldenbull } from "./platforms/goldenbull";
import { wault } from "./platforms/wault";
import { polycat } from "./platforms/polycat";
import { iron } from "./platforms/iron";
import { adamant } from "./platforms/adamant";
import { polyyeld } from "./platforms/polyyeld";
import * as polypup from "./platforms/polypup";
import { apeswap } from "./platforms/apeswap";
import { tokens } from "./tokens/tokens";
import { convertSymbolTokenMapToAddressTokenMap } from "../../util/convertSymbolTokenMapToAddressTokenMap";
import Chain from "../../types/chain";
import { ConstInterface } from "../../types/const";

const _polygon = {
  platforms: {
    beefyfinance,
    cometh,
    dfyn,
    polyzap,
    quickswap,
    sushi,
    goldenbull,
    wault,
    polycat,
    iron,
    adamant,
    polyyeld,
    ...polypup,
    apeswap,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
} as const;

export const polygon:ConstInterface<typeof _polygon, Chain> = _polygon;
