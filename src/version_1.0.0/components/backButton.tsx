import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();

    return (
        <section className='px-[4vw] md:px-[12vw]'>
            <button
                onClick={() => navigate(-1)}
                className="font-supreme-bold text-lg dark:text-[#3399FF] text-[#226EBA] cursor-pointer"
            >
                Voltar
            </button>
        </section>
    );
}
export default BackButton