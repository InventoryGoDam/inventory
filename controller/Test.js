exports.testController = async (req, res) => {
  try {
    const userData = [
      {
        name: "tom",
        address: "Khurai",
      },
    ];

    await res.status(200).json({ userData });
  } catch (error) {
    console.log("Error",error);
    res.status(500).json("Internal Server Error")
  }
};
