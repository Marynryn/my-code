
import content from '../data/hero.json';
import Image from 'next/image';
export const Hero = () => {
    return (
        <section id='hero'>
            <div className="container">
                <ul className='  flex flex-wrap justify-center gap-2 '>{content.images.map(el => <li className=' w-[196px] flex  flex-col h-[360px] p-2 rounded-2xl  bg-slate-500 ' key={el.id}>
                    <Image className='rounded-2xl mx-auto' src={el.image} alt={el.alt} width={180} height={167} priority />
                    <h3 className='font-semibold text-2xl my-4'>{el.name}</h3>
                    <p className=' font-normal text-base mb-4 flex-grow-[1]'>{el.description}</p>
                    <button type="button" className=' justify-center rounded-3xl flex p-2 w-20 bg-orange-600 transition-all duration-300 hover:bg-lime-800 focus:bg-lime-800 mr-0 ml-auto mb-0 mt-auto '>{content.button}</button>
                </li>)}</ul>
            </div>
        </section>
    )
}
