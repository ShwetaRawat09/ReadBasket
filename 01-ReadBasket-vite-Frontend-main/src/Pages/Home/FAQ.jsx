import { Accordion } from "./Accordion";

export const FAQ = () => {

  //Storing My FAQs in an Array
  const FAQS = [
    {
        "id": 1,
        "question": "Why should I use BookMart?",
        "answer": "BookMart offers a vast collection of eBooks across various genres, an intuitive user interface, and seamless access to your library on multiple devices. It's your one-stop solution for all reading needs."
    },
    {
        "id": 2,
        "question": "Can I access my eBook on mobile?",
        "answer": "Yes, you can access your eBooks on any mobile device using our responsive website or dedicated app. Your library syncs across all devices for a seamless reading experience."
    },
    {
        "id": 3,
        "question": "Do you offer refunds?",
        "answer": "Yes, we offer refunds under specific conditions, such as accidental purchases or technical issues. Please check our Refund Policy page for detailed information."
    },
    {
        "id": 4,
        "question": "Do you support International payments?",
        "answer": "Yes, we accept international payments through multiple secure payment gateways, ensuring a smooth transaction experience for users worldwide."
    },
    {
        "id": 5,
        "question": "How do I download an eBook after purchase?",
        "answer": "After completing your purchase, you can download the eBook directly from your account's 'My Library' section. A download link is also sent to your registered email."
    },
    {
        "id": 6,
        "question": "Can I share my eBooks with others?",
        "answer": "eBooks purchased on BookMart are for personal use only and cannot be shared or distributed due to copyright restrictions. However, you can gift eBooks to others through our gifting feature."
    }
];

    
  return (
    <section className="my-10 p-7 border-2 bg-gray-100 border-black rounded dark:border-black-700 dark:border-2 dark:bg-gray-800 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-white mb-3 underline underline-offset-8">FAQs</h1>    
            
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-white text-gray-900 dark:text-black" data-inactive-classes="text-gray-500 dark:text-gray-400">
              {/* Each faq will generate a new Accordion */}
              { FAQS.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>

      </section>
  )
}
