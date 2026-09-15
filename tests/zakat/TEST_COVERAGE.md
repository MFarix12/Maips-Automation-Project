# MAIPs Zakat Playwright Coverage

## Automated now

- Zakat Pendapatan: TC001-TC012 using controls confirmed from Playwright Codegen.
- Zakat Simpanan: TC001-TC008 covering card visibility, actions, calculator route, browser back, direct route and reload.
- Zakat Emas/Perak: TC001-TC008 covering card visibility, actions, calculator route, browser back, direct route and reload.
- Zakat Tanaman: TC001-TC008 covering card visibility, actions, calculator route, browser back, direct route and reload.
- Zakat Ternakan: TC001-TC008 covering card visibility, actions, calculator route, browser back, direct route and reload.
- Zakat Perniagaan: TC001-TC008 covering card visibility, actions, calculator route, browser back, direct route and reload.

## Calculator-specific coverage still requires confirmed UI evidence

The uploaded project does not contain the calculator fields, validation messages, result labels, cart controls, or business rules for Simpanan, Emas/Perak, Tanaman, Ternakan and Perniagaan. These are intentionally not fabricated. Once Playwright Codegen output or screenshots for each calculator are available, extend each module with: required/optional field validation, valid/invalid/boundary input, nisab/result calculation, previous/next navigation, recalculation, add-to-cart, cart removal/update, and payer-information handoff.

For Pendapatan, further result/nisab/cart tests also require confirmed result and cart locators.
