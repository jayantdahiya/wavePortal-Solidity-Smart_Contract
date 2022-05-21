const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    // let waveCount;
    // waveCount = await waveContract.getTotalWaves();

    let voteCounts;
    voteCounts = await waveContract.getTotalVotes();

    let voter1 = await waveContract.voteCandidate1("This is a test message!");
    await voter1.wait();

    let voter2 = await waveContract.voteCandidate2("Another testing message");
    await voter2.wait();

    let voter3 = await waveContract.voteCandidate2("Test message again");
    await voter3.wait();

    let voter4 = await waveContract.voteCandidate2("Testing");
    await voter4.wait();

    let voter5 = await waveContract.voteCandidate1("Voted for 1 again, lol");
    await voter5.wait();

    let voter6 = await waveContract.voteNone("Testing again");
    await voter6.wait();

    voteCounts = await waveContract.getTotalVotes();

    let allVotes = await waveContract.getAllVotes();
    console.log(allVotes);

};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();