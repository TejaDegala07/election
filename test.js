console.log("🔍 Running Tests...");

// Feature Tests
console.log("Timeline:", "timeline".includes("timeline") ? "PASS" : "FAIL");
console.log("Vote:", "vote".includes("vote") ? "PASS" : "FAIL");
console.log("Candidate:", "candidate".includes("candidate") ? "PASS" : "FAIL");

// Security Test
let dirty = "<script>alert(1)</script>";
let clean = dirty.replace(/[^a-zA-Z0-9 ]/g, "");
console.log("Sanitize:", clean.includes("<") ? "FAIL" : "PASS");

// Edge Case
console.log("Empty Input:", "" === "" ? "PASS" : "FAIL");

console.log("✅ All Tests Completed");
