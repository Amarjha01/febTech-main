export const welcome = async (req, res) => {
res.status(200).json({
    success: true,
    error:false,
    messaage:"hi! welcome to febtech server"
})
}