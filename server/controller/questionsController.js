module.exports = {
  updateAnswers: async function(req, res) {
    const { email, q1Picked, q2Picked, q3Picked } = req.body;
    const db = req.app.get("db");
    const answerIds = await db.getAnswerIds(q1Picked, q2Picked, q3Picked);
    await db.updateQuestions(
      answerIds[0].id,
      answerIds[1].id,
      answerIds[2].id,
      email
    );
    res.sendStatus(200);
  },
  findMatch: async function(req, res) {
    const { email } = req.session.user;
    const db = req.app.get("db");
    const userAnswers = await db.getAnswerIdsViaEmail(email);
    console.log(userAnswers);
    const potentialLovers = await db.findLove(
      userAnswers[0].q1,
      userAnswers[0].q2,
      userAnswers[0].q3
    );
    let luckyPerson =
      potentialLovers[Math.floor(Math.random() * potentialLovers.length)];
    res.status(200).json(luckyPerson);
  }
};
