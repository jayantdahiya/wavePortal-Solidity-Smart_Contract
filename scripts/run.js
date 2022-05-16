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

    let voter1 = await waveContract.voteCandidate1();
    await voter1.wait();

    let voter2 = await waveContract.voteCandidate2();
    await voter2.wait();

    let voter3 = await waveContract.voteCandidate2();
    await voter3.wait();

    let voter4 = await waveContract.voteCandidate2();
    await voter4.wait();

    let voter5 = await waveContract.voteCandidate1();
    await voter5.wait();

    let voter6 = await waveContract.voteNone();
    await voter6.wait();

    voteCounts = await waveContract.getTotalVotes();

    // let waveTxn = await waveContract.wave();
    // await waveTxn.wait();

    // waveCount = await waveContract.getTotalWaves();

    // waveTxn = await waveContract.connect(randomPerson).wave();
    // await waveTxn.wait();

    // waveCount = await waveContract.getTotalWaves();
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