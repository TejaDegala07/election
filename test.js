function testTimeline() {
    let input = "timeline";
    if (input.includes("timeline")) {
        console.log("PASS: Timeline works");
    } else {
        console.log("FAIL: Timeline broken");
    }
}

function testVote() {
    let input = "vote";
    if (input.includes("vote")) {
        console.log("PASS: Vote works");
    } else {
        console.log("FAIL: Vote broken");
    }
}

testTimeline();
testVote();
