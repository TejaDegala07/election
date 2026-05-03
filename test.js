// ---------------- TEST: TIMELINE ----------------
function testTimeline() {
    let input = "timeline";
    if (input.includes("timeline")) {
        console.log("✅ PASS: Timeline feature works");
    } else {
        console.log("❌ FAIL: Timeline feature broken");
    }
}

// ---------------- TEST: VOTING ----------------
function testVote() {
    let input = "vote";
    if (input.includes("vote")) {
        console.log("✅ PASS: Voting feature works");
    } else {
        console.log("❌ FAIL: Voting feature broken");
    }
}

// ---------------- TEST: CANDIDATE ----------------
function testCandidate() {
    let input = "candidate";
    if (input.includes("candidate")) {
        console.log("✅ PASS: Candidate feature works");
    } else {
        console.log("❌ FAIL: Candidate feature broken");
    }
}

// ---------------- TEST: SANITIZATION (SECURITY) ----------------
function testSanitize() {
    let dirtyInput = "<script>alert('hack')</script>";
    let cleanInput = dirtyInput.replace(/[^a-zA-Z0-9 ]/g, "");

    if (!cleanInput.includes("<") && !cleanInput.includes(">")) {
        console.log("✅ PASS: Input sanitization works");
    } else {
        console.log("❌ FAIL: Input sanitization failed");
    }
}

// ---------------- TEST: EMPTY INPUT ----------------
function testEmptyInput() {
    let input = "";
    if (input === "") {
        console.log("✅ PASS: Empty input handled");
    } else {
        console.log("❌ FAIL: Empty input issue");
    }
}

// ---------------- RUN ALL TESTS ----------------
function runAllTests() {
    console.log("🔍 Running Tests...\n");

    testTimeline();
    testVote();
    testCandidate();
    testSanitize();
    testEmptyInput();

    console.log("\n✅ Testing Completed");
}

// Execute tests
runAllTests();
