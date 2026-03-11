const d1 = new Date("2026-03-12T13:30");
console.log("d1:", d1.toString());
console.log("d1 valid:", !isNaN(d1.getTime()));

const d2 = new Date("2026-03-12");
console.log("d2:", d2.toString());
console.log("d2 valid:", !isNaN(d2.getTime()));

try {
    console.log("d1 toISOString:", d1.toISOString());
} catch (e) {
    console.log("d1 toISOString failed:", e.message);
}
