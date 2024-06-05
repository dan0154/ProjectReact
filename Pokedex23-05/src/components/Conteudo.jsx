import { motion } from "framer-motion";

export default function Conteudo({visivel}){
    return(
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate = {{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -50}}
            transition={{duration: 1}}
        >
            {visivel}
        </motion.div>
    )
}