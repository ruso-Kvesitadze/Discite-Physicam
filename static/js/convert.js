   
    /* toExponential( რიცხვი , დამრგვალების სიზუსტე) ნეპერის რიცხვი */
    /* round() უბრალოდ ამრგვალებს */
  
/* ეს ფუნქცია უზრუნველყოფს მძიმეების დასმას შესაბამის ადგილებში */


    function pointer(x) {
        var str = x.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }   
    
 
    function cute_answer(Number, accuracy){
        answer= parseFloat(Number).toFixed(accuracy)
        last_answer= pointer(answer)
        return result.value=last_answer
    }

    function cute_answer_short(Number, accuracy){
        answer= parseFloat(Number).toPrecision(accuracy)
        last_answer= pointer(answer)
        return result.value=last_answer
    }

    function getlength(number) {
        if (number==0){
            return 0 
        }else if (number<1e+5 && number > 13){
            return number.toString().length
        }else if (number <= 13 ){
            return 10
        }else{
            return 2 
        }
    }

/*  */
    function myResult(){

        inputTypeValue=inputType.value;
        resultTypeValue=resultType.value;
        main_selectValue=main_select.value;

 
        /*----------------------------------------------------------- სიგრძე ----------------------------------------------------------*/
        /*----------------------------------------------------------- სიგრძე ----------------------------------------------------------*/
        /*----------------------------------------------------------- სიგრძე ----------------------------------------------------------*/
        
        if (main_selectValue== "length"){

            if(inputTypeValue=="Meters"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 1 )
                result.value=pointer(answer)

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="Kilometer" ) {

                answer=(Number (input.value) / 1000 )
                result.value=pointer(answer)

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="decimeter" ) {

                answer=(Number (input.value) * 10  )
                result.value=pointer(answer)

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="Centimeter" ) {

                answer=(Number (input.value) * 100 )
                result.value=pointer(answer)

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="Millimeter" ) {

                answer=(Number (input.value) * 1000 )
                result.value=pointer(answer)

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="Micrometer" ) {

                answer=(Number (input.value) * 1e+6)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="Nanometer" ) {

                answer=(Number (input.value) * 1e+9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="Miles" ) {

                answer=(Number (input.value) / 1609.344 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="Yard" ) {

                answer=(Number (input.value) * 1.0936132983 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="Foot" ) {

                answer=(Number (input.value) * 3.280839895 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="Inches" ) {

                answer=(Number (input.value) * 39.37007874 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="Nautical mile" ) {

                answer=(Number (input.value) * 0.0005399568 )
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="light year" ) {

                answer=(Number (input.value) * 1.057000834e-16 )
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="micron" ) {

                answer=(Number (input.value) * 1000000 )
                accuracy=getlength(input.value)
                cute_answer_short(answer,14 )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="parsec" ) {

                answer=(Number (input.value) * 3.240779289e-17)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="astr-unit" ) {

                answer=(Number (input.value) * 6.684587122e-12 )
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="plank length" ) {

                answer=(Number (input.value) *6.187927353e+34 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="electron radius" ) {

                answer=(Number (input.value) * 354869043883290 )
                accuracy=getlength(input.value)
                cute_answer(answer,3 )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="bohr radius" ) {

                answer=(Number (input.value) * 18897259886 )
                accuracy=getlength(input.value)
                cute_answer(answer,4 )

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="earth radius" ) {

                answer=(Number (input.value) * 1.567850289E-7 )
                accuracy=getlength(input.value)
                cute_answer(answer, accuracy)

            }else if (inputTypeValue=="Meters"  &&  resultTypeValue=="sun radius" ) {

                answer=(Number (input.value) * 1.436781609E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="Kilometer"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 1000 )
                accuracy=getlength(input.value)
                cute_answer(answer,3 )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 1 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 10000 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 100000 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 1000000 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 1000000000 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 1000000000000 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 0.6213711922 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 1093.6132983 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 3280.839895)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 39370.07874)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 0.5399568035 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1.057000834E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 1000000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 3.240779289E-14)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 6.684587122E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 6.187927353E+37)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 354869043883290000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 18897259885789)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 0.000156785)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Kilometer"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 0.0000014368)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="decimeter"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 0.1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 0.0001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 100)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 100000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 100000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 0.0000621371)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 0.1093613298)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 0.3280839895)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 3.937007874)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 0.0000539957)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1.057000834E-17)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 100000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 3.240779289E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 6.684587122E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 6.187927353E+33)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 35486904388329)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 1889725988.6)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 1.567850289E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="decimeter"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 1.436781609E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }


           
            
            else if(inputTypeValue=="Centimeter"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 0.01)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 0.00001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 0.1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 10000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 10000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 0.0000062137)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 0.010936133)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 0.032808399)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 0.3937007874)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 0.0000053996)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1.057000834E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 10000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 3.240779289E-19)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 6.684587122E-14)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 6.187927353E+32)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 3548690438833)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 188972598.86)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 1.567850289E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Centimeter"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 1.436781609E-11)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }




            else if(inputTypeValue=="Millimeter"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 0.000001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 0.01)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 0.1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 1000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 6.213711922E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 0.0010936133)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 0.0032808399)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 0.0393700787)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) *5.399568034E-7 )
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1.057000834E-19)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 3.240779289E-20)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 6.684587122E-15)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 6.187927353E+31)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 354869043883)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 18897259.886)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 1.567850289E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Millimeter"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 1.436781609E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }
        




            else if(inputTypeValue=="Micrometer"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 0.000001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 1.E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 0.00001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 0.0001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 6.213711922E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 0.0000010936)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 0.0000032808)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 5.399568034E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 5.399568034E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1.057000834E-22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 3.240779289E-23)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 6.684587122E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 6.187927353E+28)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 354869043.88)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 18897.259886)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 1.567850289E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Micrometer"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 1.436781609E-15)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="Nanometer"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 1.E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 1.E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 1.E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 1.E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 0.000001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 6.213711922E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 1.093613298E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 3.280839895E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 3.937007874E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 5.399568034E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1.057000834E-25)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 3.240779289E-26)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 6.684587122E-21)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 6.187927353E+25)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 354869.04388)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 18.897259886)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 1.567850289E-16)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nanometer"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 1.436781609E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="Miles"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 1609.344)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 1.609344)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 16093.44)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 160934.4)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 1609344)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 1609344000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 1609344000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 1760)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 5280)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 63360)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 0.8689762419)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1.70107795E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 1609344000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 5.215528705E-14)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 1.075780017E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 9.958503759E+37)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 571106366559313100)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 30412191813635)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 0.000252321)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Miles"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 0.0000023123)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="Yard"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 0.9144)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 0.0009144)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 9.144)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 91.44)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 914.4)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 914400)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 914400000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 0.0005681818)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 3)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 36)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 0.0004937365)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 9.665215626E-17)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 914400)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 2.963368582E-17)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 6.112386464E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 5.658240772E+34)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 324492253726883)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 17279654440)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 1.433642304E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Yard"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 1.313793103E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="Foot"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 0.3048)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 0.0003048)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 3.048)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 30.48)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 304.8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 304800)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 304800000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 0.0001893939)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 0.3333333333)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 0.0001645788)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 3.221738542E-17)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 304800)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 9.877895274E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 2.037462154E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 1.886080257E+34)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 108164084575628)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 5759884813.2)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 4.778807681E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Foot"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 4.379310344E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="Inches"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 0.0254)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 0.0000254)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 0.254)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 2.54)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 25.4)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 25400)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 25400000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 0.0000157828)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 0.0277777778)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 0.0833333333)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 0.0000137149)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 2.684782118E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 25400)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 8.231579395E-19)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 1.697885129E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 1.571733547E+33)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 9013673714636)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 479990401.1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 3.982339734E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Inches"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 3.649425287E-11)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }






            else if(inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 1852)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 1.852)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 18520)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 185200)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 1852000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 1852000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 1852000000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 1.150779448)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 2025.3718285)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 6076.1154856)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 72913.385827)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1.957565544E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 1852000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 6.001923244E-14)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 1.237985535E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 1.146004145E+38)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 657217469271857400)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 34997725308481)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 0.0002903659)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="Nautical mile"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 0.0000026609)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="light year"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 9460730472580044)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 9460730472580)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 94607304725800430)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 946073047258004200)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 9460730472580043000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 9.460730472E+21)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 9.460730472E+24)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 5878625373183)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 10346380656802248)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 31039141970406748)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 372469703644879100)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 5108385784330)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 9.460730472E+21)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 0.3066013938)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 63241.077088)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 5.854231287E+50)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 3.357320377E+30)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 1.787818824E+26)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 1483300900.7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="light year"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 13593003.553)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="micron"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 0.000001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 1.E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 0.00001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 0.0001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 6.213711922E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 0.0000010936)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 0.0000032808)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 0.0000393701)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 5.399568034E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1.057000834E-22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 3.240779289E-23)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 6.684587122E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 6.187927353E+28)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 354869043.88)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 18897.259886)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 1.567850289E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="micron"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 1.436781609E-15)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }






            else if(inputTypeValue=="parsec"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 30856775812799588)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 30856775812800)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 308567758127995900)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 3085677581279958500)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 30856775812799586000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 3.085677581E+22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 3.085677581E+25)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 19173511575399)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 33745380372702720)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 101236141118108160)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 1214833693417291800)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 16661326032829)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 3.2615637769)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 3.085677581E+22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 206264.80625)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 1.909394871E+51)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 1.095011453E+31)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 5.831085117E+26)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 4837880487.9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="parsec"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 44334448.007)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }






            else if(inputTypeValue=="astr-unit"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 149597870691)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 149597870.69)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 1495978706910)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 14959787069100)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 149597870691000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 149597870690999970)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 149597870690999960000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 92955807.267)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 163602220791)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 490806662372)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 5889679948464)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 80776388.062)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 0.0000158125)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 149597870690999970)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 0.0000048481)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 9.257007561E+45)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 5.308765333E+25)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 2.82698984E+21)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 23454.706481)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="astr-unit"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 214.93946938)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }






            else if(inputTypeValue=="plank length"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 1.616049999E-35)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 1.616049999E-38)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 1.616049999E-34)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 1.616049999E-33)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 1.616049999E-32)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 1.616049999E-29)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 1.616049999E-26)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 1.004166915E-38)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 1.76733377E-35)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 5.302001312E-35)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 6.362401574E-34)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 8.725971922E-39)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 1.708166197E-51)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 1.616049999E-29)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 5.237261371E-52)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 1.080262701E-46)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 5.734861183E-21)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 3.053891683E-25)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 2.533724459E-42)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="plank length"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 2.321910919E-44)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="electron radius"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 2.81794092E-15)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 2.81794092E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 2.81794092E-14)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 2.81794092E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 2.81794092E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 2.81794092E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 0.0000028179)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 1.750987309E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 3.081737664E-15)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 9.245212992E-15)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 1.109425559E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 1.521566371E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 2.978565902E-31)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 2.81794092E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 9.132324573E-32)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 1.883677158E-26)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 174372137000712800000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 0.0000532514)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 4.418109486E-22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="electron radius"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 4.048765689E-24)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }






            else if(inputTypeValue=="bohr radius"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 5.29177249E-11)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 5.29177249E-14)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 5.29177249E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 5.29177249E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 5.29177249E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 0.0000529177)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 0.0529177249)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 3.288154981E-14)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 5.787152766E-11)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 1.73614583E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 2.083374996E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 2.857328558E-14)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 5.593407935E-27)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 0.0000529177)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 1.714946669E-27)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 3.537331424E-22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 3.274510374E+24)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 18778.86244)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 8.296707028E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="bohr radius"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 7.603121393E-20)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }






            else if(inputTypeValue=="earth radius"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 6378160)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 6378.16)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 63781600)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 637816000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 6378160000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 6378160000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 6378159999999974)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 3963.2048835)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 6975240.5949)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 20925721.785)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 251108661.42)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 3443.9308855)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 6.741720439E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 6378160000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 2.067020883E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 0.0000426354)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 3.946759073E+41)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 2.26341154E+21)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 120529747113143460)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="earth radius"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 0.009164023)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }





            else if(inputTypeValue=="sun radius"  &&  resultTypeValue=="Meters" ) {

                answer=(Number (input.value) * 696000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="Kilometer" ) {
            
                answer=(Number (input.value) * 696000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="decimeter" ) {
            
                answer=(Number (input.value) * 6960000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="Centimeter" ) {
            
                answer=(Number (input.value) * 69600000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="Millimeter" ) {
            
                answer=(Number (input.value) * 696000000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="Micrometer" ) {
            
                answer=(Number (input.value) * 696000000000001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="Nanometer" ) {
            
                answer=(Number (input.value) * 696000000000001200)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="Miles" ) {
            
                answer=(Number (input.value) * 432474.3498)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="Yard" ) {
            
                answer=(Number (input.value) * 761154855.64)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="Foot" ) {
            
                answer=(Number (input.value) * 2283464566.9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="Inches" ) {
            
                answer=(Number (input.value) * 27401574803)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="Nautical mile" ) {
            
                answer=(Number (input.value) * 375809.93521)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="light year" ) {
            
                answer=(Number (input.value) * 7.356725804E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="micron" ) {
            
                answer=(Number (input.value) * 696000000000001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="parsec" ) {
            
                answer=(Number (input.value) * 2.255582385E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="astr-unit" ) {
            
                answer=(Number (input.value) * 0.0046524726)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="plank length" ) {
            
                answer=(Number (input.value) * 4.306797438E+43)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="electron radius" ) {
            
                answer=(Number (input.value) * 2.469888545E+23)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="bohr radius" ) {
            
                answer=(Number (input.value) * 13152492880509166000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="earth radius" ) {
            
                answer=(Number (input.value) * 109.12238012)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }else if (inputTypeValue=="sun radius"  &&  resultTypeValue=="sun radius" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )

            }
        }


        /*----------------------------------------------------------- ფართობი -----------------------------------------------------------*/
        /*----------------------------------------------------------- ფართობი -----------------------------------------------------------*/
        /*----------------------------------------------------------- ფართობი -----------------------------------------------------------*/
        
        else if (main_selectValue=="area"){

            if(inputTypeValue=="Square meter"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 0.000001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 10000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 1000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 1000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 1000000000000000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 0.0001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 0.0002471054)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 3.861021585E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 1.1959900463)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 10.763910417)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 1550.0031)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Square meter"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 1.503202964E+28)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 1000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 10000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 1000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 1000000000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 1.E+24)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 100)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 247.10538147)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 0.3861021585)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 1195990.0463)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 10763910.417)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 1550003100)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Square kilometer"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 1.503202964E+34)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }
            



            
            else if(inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 0.0001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 1.E-10)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 100)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 100000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 100000000000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 1.E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 2.471053814E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 3.861021585E-11)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 0.000119599)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 0.001076391)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 0.15500031)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Square centimeter"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 1.503202964E+24)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 0.000001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 1.E-12)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 0.01)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 1000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 1000000000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 1.E-10)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 2.471053814E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 3.861021585E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 0.000001196)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 0.0000107639)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 0.0015500031)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Square millimeter"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 1.503202964E+22)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 1.E-12)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 1.E-18)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 1.E-8)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 0.000001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 1000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 1.E-16)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 2.471053814E-16)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 3.861021585E-19)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 1.195990046E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 1.076391041E-11)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 1.5500031E-9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Square micrometer"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 15032029647492000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 1.E-18)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 1.E-24)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 1.E-14)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 1.E-12)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 0.000001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 1.E-22)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 2.471053814E-22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 3.861021585E-25)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 1.195990046E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 1.076391041E-17)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 1.5500031E-15)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Square nanometer"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 15032029647)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Hectare"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 10000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 0.01)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 100000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 10000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 10000000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 1.E+22)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 2.4710538147)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 0.0038610216)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 11959.900463)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 107639.10417)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 15500031)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Hectare"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 1.503202964E+32)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Acre"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 4046.8564224)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 0.0040468564)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 40468564.224)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 4046856422.4)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 4046856422399924)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 4.046856422E+21)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 0.4046856422)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 0.0015625)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 4840)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 43560)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 6272640)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Acre"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 6.083246572E+31)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Square mile"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 2589988.1103)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 2.5899881103)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 25899881103)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 2589988110336)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 2589988110335972400)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 2.58998811E+24)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 258.99881103)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 640)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 3097600)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 27878400)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 4014489600)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Square mile"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 3.893277806E+34)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Square yard"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 0.83612736)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 8.361273599E-7)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 8361.2736)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 836127.36)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 836127360000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 836127359999986200)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 0.0000836127)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 0.0002066116)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 3.228305785E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 1296)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Square yard"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 1.256869126E+28)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Square foot"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 0.09290304)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 9.290303999E-8)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 929.0304)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 92903.04)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 92903040000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 92903039999997600)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 0.0000092903)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 0.0000229568)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 3.587006427E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 0.1111111111)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 144)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Square foot"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 1.396521251E+27)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Square Inches"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 0.00064516)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 6.4516E-10)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 6.4516)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 645.16)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 645160000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 645160000000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 6.4516E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 1.594225079E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 2.490976686E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 0.0007716049)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 0.0069444444)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Square Inches"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 9.698064247E+24)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="electron area"  &&  resultTypeValue=="Square meter" ) {

                answer=(Number (input.value) * 6.652461599E-29)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Square kilometer" ) {
            
                answer=(Number (input.value) * 6.652461599E-35)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Square centimeter" ) {
            
                answer=(Number (input.value) * 6.652461599E-25)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Square millimeter" ) {
            
                answer=(Number (input.value) * 6.652461599E-23)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Square micrometer" ) {
            
                answer=(Number (input.value) * 6.652461599E-17)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Square nanometer" ) {
            
                answer=(Number (input.value) * 6.652461599E-11)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Hectare" ) {
            
                answer=(Number (input.value) * 6.652461599E-33)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Acre" ) {
            
                answer=(Number (input.value) * 1.643859061E-32)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Square mile" ) {
            
                answer=(Number (input.value) * 2.568529783E-35)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Square yard" ) {
            
                answer=(Number (input.value) * 7.956277857E-29)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Square foot" ) {
            
                answer=(Number (input.value) * 7.160650071E-28)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="Square Inches" ) {
            
                answer=(Number (input.value) * 1.03113361E-25)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="electron area"  &&  resultTypeValue=="electron area" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }
        }

  
        /*----------------------------------------------------------- მოცულობა -----------------------------------------------------------*/
        /*----------------------------------------------------------- მოცულობა -----------------------------------------------------------*/
        /*----------------------------------------------------------- მოცულობა -----------------------------------------------------------*/
       
        else if (main_selectValue=="volume"){
           
            if(inputTypeValue=="cubic meter"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 6.2898107704)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 1.E-9)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 1000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 1000000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 1000000000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 2.399127585E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 1.3079506193)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 35.314666721)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 61023.744095)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="cubic meter"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 9.233610341E-22)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="liter"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 0.0062898108)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 1.E-12)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 1000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 1000000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 2.399127585E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 0.0013079506)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 0.0353146667)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 61.023744095)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="liter"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 9.233610341E-25)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }
            



            
            else if(inputTypeValue=="barrel"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 0.1589872949)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 158.98729493)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 1.589872949E-10)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 158987.29493)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 158.98729493)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 158987294.93)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 158987294928)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 3.81430805E-11)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 0.2079475309)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 5.6145833333)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 9702)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="barrel"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 1.46802673E-22)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 1000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 1000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 6289810770.4)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 1000000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 1000000000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 1000000000000000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 1.E+21)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 0.2399127586)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 1307950619.3)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 35314666721)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 61023744094732)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="cubic kilometer"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 9.233610341E-13)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 0.000001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 0.0000062898)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 1.E-15)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 1000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 2.399127585E-16)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 0.000001308)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 0.0000353147)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 0.0610237441)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="cubic centimeter"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 9.233610341E-28)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 0.0062898108)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 1.E-12)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 1000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 1000000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 2.399127585E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 0.0013079506)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 0.0353146667)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 61.023744095)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="cubic decimeter"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 9.233610341E-25)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 1.E-9)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 0.000001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 6.28981077E-9)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 1.E-18)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 0.000001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 2.399127585E-19)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 1.307950619E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 3.531466672E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 0.0000610237)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="cubic millimeter"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 9.233610341E-31)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 1.E-12)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 1.E-9)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 6.28981077E-12)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 1.E-21)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 0.000001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 1.E-9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 2.399127585E-22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 1.307950619E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 3.531466672E-11)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 6.102374409E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="cubic nanometer"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 9.233610341E-34)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="cubic mile"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 4168181825.4)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 4168181825441)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 26217074939)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 4.1681818254)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 4168181825440540)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 4168181825441)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 4168181825440539600)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 4.168181825E+21)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 5451776000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 147197952000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 254358061055996)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="cubic mile"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 3.84873668E-12)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="cubic yard"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 0.764554858)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 764.55485798)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 4.8089053803)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 7.645548579E-10)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 764554.85798)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 764.55485798)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 764554857.98)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 764554857984)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 1.83426465E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 27)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 46656)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="cubic yard"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 7.059601643E-22)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="cubic foot"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 0.0283168466)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 28.316846592)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 0.1781076067)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 2.831684659E-11)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 28316.846592)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 28.316846592)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 28316846.592)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 28316846592)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 6.79357278E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 0.037037037)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 1728)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="cubic foot"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 2.614667275E-23)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }




            
            else if(inputTypeValue=="cubic Inches"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 0.0000163871)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 0.016387064)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 0.0001030715)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 1.6387064E-14)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 16.387064)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 0.016387064)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 16387.064)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 16387064)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 3.931465729E-15)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 0.0000214335)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 0.0005787037)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="cubic Inches"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 1.513117636E-26)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="earth volume"  &&  resultTypeValue=="cubic meter" ) {

                answer=(Number (input.value) * 1.082999999E+21)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="liter" ) {
            
                answer=(Number (input.value) * 1.082999999E+24)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="barrel" ) {
            
                answer=(Number (input.value) * 6.811865064E+21)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="cubic kilometer" ) {
            
                answer=(Number (input.value) * 1083000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="cubic centimeter" ) {
            
                answer=(Number (input.value) * 1.082999999E+27)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="cubic decimeter" ) {
            
                answer=(Number (input.value) * 1.082999999E+24)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="cubic millimeter" ) {
            
                answer=(Number (input.value) * 1.082999999E+30)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="cubic nanometer" ) {
            
                answer=(Number (input.value) * 1.082999999E+33)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="cubic mile" ) {
            
                answer=(Number (input.value) * 259825517541)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="cubic yard" ) {
            
                answer=(Number (input.value) * 1.41651052E+21)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="cubic foot" ) {
            
                answer=(Number (input.value) * 3.824578405E+22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="cubic Inches" ) {
            
                answer=(Number (input.value) * 6.608871485E+25)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="earth volume"  &&  resultTypeValue=="earth volume" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }
        }

        
        /*----------------------------------------------------------- მასა -----------------------------------------------------------*/
        /*----------------------------------------------------------- მასა -----------------------------------------------------------*/
        /*----------------------------------------------------------- მასა -----------------------------------------------------------*/ 
        
        else if (main_selectValue=="mass"){

            if(inputTypeValue=="Kilogram"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 1000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 2.2046226218)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 35.27396195)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 5000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 6.022136651E+26)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 45940892.448)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 1.097768382E+30)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 5.978633201E+26)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 5.970403753E+26)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 1.673360107E-25)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilogram"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 5.E-31)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="gram"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 0.000001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 0.0022046226)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 0.0352739619)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 5)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 6.022136651E+23)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 45940.892448)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 1.097768382E+27)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 5.978633201E+23)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 5.970403753E+23)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 1.673360107E-28)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="gram"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 5.E-34)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }
            



            
            else if(inputTypeValue=="miligram"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 0.000001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 1.E-9)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 0.0000022046)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 0.000035274)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 0.005)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 602213665167520000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 45.940892448)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 1.097768382E+24)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 597863320194490000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 597040375333010000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 1.673360107E-31)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="miligram"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 5.E-37)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="ton"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 1000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 1000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 2204.6226218)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 35273.96195)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 5000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 6.022136651E+29)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 45940892448)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 1.097768382E+33)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 5.978633201E+29)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 5.970403753E+29)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 1.673360107E-22)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="ton"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 5.E-28)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="pound"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 0.45359237)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 453.59237)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 453592.37)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 0.0004535924)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 16)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 2267.96185)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 2.731595236E+26)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 20838438.285)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 4.979393625E+29)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 2.711862403E+26)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 2.708129588E+26)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 7.590233768E-26)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="pound"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 2.267961849E-31)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="ounce"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 0.0283495231)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 28.349523125)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 28349.523125)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 0.0000283495)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 0.0625)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 141.74761563)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 1.707247022E+25)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 1302402.3928)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 3.112121015E+28)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 1.694914002E+25)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 1.692580992E+25)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 4.743896105E-27)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="ounce"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 1.417476156E-32)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="carat"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 0.0002)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 0.2)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 200)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 2.E-7)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 0.0004409245)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 0.0070547924)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 1.20442733E+23)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 9188.1784896)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 2.195536765E+26)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 1.19572664E+23)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 1.19408075E+23)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 3.346720214E-29)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="carat"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 1.E-34)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="atomic mass"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 1.660540199E-27)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 1.660540199E-24)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 1.660540199E-21)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 1.660540199E-30)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 3.660864489E-27)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 5.857383183E-26)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 8.302700999E-24)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 7.628669873E-20)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 1822.8885301)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 0.9927760773)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 0.9914095443)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 2.778681726E-52)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="atomic mass"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 8.302700999E-58)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="plank mass"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 2.176709999E-8)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 0.0000217671)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 0.0217671)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 2.176709999E-11)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 4.798824107E-8)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 7.678118571E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 0.0001088355)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 13108445071067836000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 2.389523416E+22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 115565288566530700000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 12995837553911075000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 3.642419678E-33)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="plank mass"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 1.088354999E-38)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="electron mass"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 9.109389699E-31)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 9.109389699E-28)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 9.109389699E-25)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 9.109389699E-34)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 2.00827666E-30)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 3.213242656E-29)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 4.554694849E-27)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 0.0005485799)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 4.184934924E-23)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 0.000544617)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 0.0005438673)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 1.524328932E-55)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="electron mass"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 4.554694849E-61)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="proton mass"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 1.672623099E-27)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 1.672623099E-24)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 1.672623099E-21)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 1.672623099E-30)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 3.687502724E-27)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 5.900004358E-26)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 8.363115499E-24)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 1.0072764875)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 7.684179794E-20)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 1836.1527557)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 0.9986235234)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 2.798900769E-52)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="proton mass"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 8.363115499E-58)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }




            
            else if(inputTypeValue=="neutron mass"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 1.6749286E-27)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 1.6749286E-24)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 1.6749286E-21)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 1.6749286E-30)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 3.692585481E-27)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 5.90813677E-26)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 8.374643E-24)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 1.0086648911)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 7.694771467E-20)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 1838.6836607)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 1.0013783739)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 2.802758701E-52)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="neutron mass"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 8.374643E-58)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="earth mass"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 5.976E+24)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 5.976E+27)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 5.976E+30)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 5.976E+21)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 1.317482478E+25)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 2.107971966E+26)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 2.988E+28)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 3.598828863E+51)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 2.745427732E+32)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 6.560263856E+54)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 3.572831201E+51)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 3.567913282E+51)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="earth mass"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 0.000002988)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="sun mass"  &&  resultTypeValue=="Kilogram" ) {

                answer=(Number (input.value) * 1.999999999E+30)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="gram" ) {
            
                answer=(Number (input.value) * 2.E+33)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="miligram" ) {
            
                answer=(Number (input.value) * 1.999999999E+36)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="ton" ) {
            
                answer=(Number (input.value) * 1.999999999E+27)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="pound" ) {
            
                answer=(Number (input.value) * 4.409245243E+30)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="ounce" ) {
            
                answer=(Number (input.value) * 7.054792389E+31)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="carat" ) {
            
                answer=(Number (input.value) * 1.E+34)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="atomic mass" ) {
            
                answer=(Number (input.value) * 1.20442733E+57)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="plank mass" ) {
            
                answer=(Number (input.value) * 9.188178489E+37)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="electron mass" ) {
            
                answer=(Number (input.value) * 2.195536765E+60)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="proton mass" ) {
            
                answer=(Number (input.value) * 1.19572664E+57)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="neutron mass" ) {
            
                answer=(Number (input.value) * 1.19408075E+57)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="earth mass" ) {
            
                answer=(Number (input.value) * 334672.02142)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="sun mass"  &&  resultTypeValue=="sun mass" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }


        }


        /*----------------------------------------------------------- დრო -----------------------------------------------------------*/
        /*----------------------------------------------------------- დრო -----------------------------------------------------------*/
        /*----------------------------------------------------------- დრო -----------------------------------------------------------*/
        
        else if (main_selectValue=="time"){

            if(inputTypeValue=="Second"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 0.0166666667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 0.0002777778)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 1000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 1000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 0.0000115741)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 0.0000016534)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 3.805175038E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 3.170979198E-8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 3.170979198E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 3.170979198E-10)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 3.170979198E-11)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 0.0000116058)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 3.919349445E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 3.168753601E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Second"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 1.855094832E+43)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Minute"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 60)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 0.0166666667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 60000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 60000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 60000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 0.0006944444)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 0.0000992063)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 0.0000228311)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 0.0000019026)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 1.902587519E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 1.902587519E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 1.902587519E-9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 0.0006963458)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 0.0000235161)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 0.0000019013)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Minute"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 1.113056899E+45)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }
            



            
            else if(inputTypeValue=="Hour"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 3600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 60)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 3600000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 3600000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 3600000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 0.0416666667)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 0.005952381)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 0.001369863)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 0.0001141553)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 0.0000114155)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 0.0000011416)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 1.141552511E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 0.0417807465)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 0.0014109658)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 0.0001140751)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Hour"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 6.678341396E+46)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 1.E-9)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 1.666666666E-11)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 2.777777777E-13)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 0.000001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 1.157407407E-14)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 1.653439153E-15)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 3.805175038E-16)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 3.170979198E-17)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 3.170979198E-18)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 3.170979198E-19)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 3.170979198E-20)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 1.160576291E-14)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 3.919349445E-16)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 3.168753601E-17)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Nanosecond"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 1.855094832E+34)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Microsecond"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 0.000001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 1.666666666E-8)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 2.777777777E-10)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 1.157407407E-11)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 1.653439153E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 3.805175038E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 3.170979198E-14)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 3.170979198E-15)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 3.170979198E-16)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 3.170979198E-17)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 1.160576291E-11)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 3.919349445E-13)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 3.168753601E-14)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Microsecond"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 1.855094832E+37)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Millisecond"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 0.0000166667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 2.777777777E-7)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 1000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 1.157407407E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 1.653439153E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 3.805175038E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 3.170979198E-11)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 3.170979198E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 3.170979198E-13)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 3.170979198E-14)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 1.160576291E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 3.919349445E-10)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 3.168753601E-11)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Millisecond"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 1.855094832E+40)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Day"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 86400)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 1440)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 24)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 86400000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 86400000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 86400000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 0.1428571429)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 0.0328767123)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 0.002739726)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 0.0002739726)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 0.0000273973)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 0.0000027397)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 1.0027379155)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 0.0338631792)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 0.0027378031)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Day"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 1.602801935E+48)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Week"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 604800)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 10080)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 168)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 604800000000002)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 604800000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 604800000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 0.2301369863)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 0.0191780822)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 0.0019178082)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 0.0001917808)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 0.0000191781)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 7.0191654087)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 0.2370422545)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 0.0191646218)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Week"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 1.121961354E+49)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Month"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 2628000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 43800)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 730)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 2628000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 2628000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 2628000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 30.416666667)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 4.3452380952)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 0.0833333333)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 0.0083333333)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 0.0008333333)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 0.0000833333)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 30.499944931)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 1.0300050343)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 0.0832748446)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Month"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 4.875189219E+49)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="year"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 31536000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 525600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 8760)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 31536000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 31536000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 31536000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 365)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 52.142857143)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 0.1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 0.01)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 365.99933917)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 12.360060412)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 0.9992981357)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="year"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 5.850227063E+50)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Decade"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 315360000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 5256000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 87600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 315360000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 315360000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 315360000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 3650)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 521.42857143)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 120)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 0.1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 0.01)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 3659.9933917)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 123.60060412)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 9.9929813565)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Decade"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 5.850227063E+51)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }




            
            else if(inputTypeValue=="Century"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 3153600000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 52560000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 876000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 3153600000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 3153600000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 3153600000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 36500)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 5214.2857143)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 1200)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 100)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 0.1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 36599.933917)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 1236.0060412)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 99.929813565)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Century"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 5.850227063E+52)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="millenium"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 31536000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 525600000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 8760000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 31536000000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 31536000000000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 31536000000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 365000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 52142.857143)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 12000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 100)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 10)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 365999.33917)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 12360.060412)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 999.29813565)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="millenium"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 5.850227063E+53)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="synodic Day"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 86164.09)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 1436.0681667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 23.934469444)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 86164090000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 86164090000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 86164090)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 0.9972695602)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 0.14246708)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 0.0327869444)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 0.0027322454)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 0.0002732245)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 0.0000273225)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 0.0000027322)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 0.0337707178)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 0.0027303277)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic Day"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 1.598425581E+48)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }

            


            else if(inputTypeValue=="synodic Month"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 2551443.84)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 42524.064)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 708.7344)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 2551443839999941)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 2551443840000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 2551443840)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 29.5306)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 4.2186571429)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 0.9708690411)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 0.0809057534)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 0.0080905753)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 0.0008090575)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 0.0000809058)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 29.611452288)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 0.0808489686)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic Month"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 4.733170282E+49)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }




            else if(inputTypeValue=="synodic year"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 31558149.54)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 525969.159)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 8766.15265)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 31558149540000172)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 31558149540000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 31558149540)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 365.25636042)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 52.17948006)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 12.008428288)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 1.0007023573)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 0.1000702357)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 0.0100070236)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 0.0010007024)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 366.25640148)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 12.368741591)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="synodic year" ) {
            
                answer=(Number (input.value) * 1.0000386457)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="synodic year"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 5.854336013E+50)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }




            else if(inputTypeValue=="plank time"  &&  resultTypeValue=="Second" ) {

                answer=(Number (input.value) * 5.390559999E-44)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="Minute" ) {
            
                answer=(Number (input.value) * 8.984266666E-46)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="Hour" ) {
            
                answer=(Number (input.value) * 1.497377777E-47)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="Nanosecond" ) {
            
                answer=(Number (input.value) * 5.390559999E-35)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="Microsecond" ) {
            
                answer=(Number (input.value) * 5.390559999E-38)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="Millisecond" ) {
            
                answer=(Number (input.value) * 5.390559999E-41)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="Day" ) {
            
                answer=(Number (input.value) * 6.239074074E-49)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="Week" ) {
            
                answer=(Number (input.value) * 8.912962962E-50)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="Month" ) {
            
                answer=(Number (input.value) * 2.051202435E-50)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="year" ) {
            
                answer=(Number (input.value) * 1.709335362E-51)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="Decade" ) {
            
                answer=(Number (input.value) * 1.709335362E-52)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="Century" ) {
            
                answer=(Number (input.value) * 1.709335362E-53)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="millenium" ) {
            
                answer=(Number (input.value) * 1.709335362E-54)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="synodic Day" ) {
            
                answer=(Number (input.value) * 6.256156131E-49)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="synodic Month" ) {
            
                answer=(Number (input.value) * 2.112748834E-50)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="synodic yea" ) {
            
                answer=(Number (input.value) * 1.708135641E-51)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="plank time"  &&  resultTypeValue=="plank time" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }

        }


        /*----------------------------------------------------------- ტემპერატურა -----------------------------------------------------------*/
        /*----------------------------------------------------------- ტემპერატურა -----------------------------------------------------------*/
        /*----------------------------------------------------------- ტემპერატურა -----------------------------------------------------------*/

        else if (main_selectValue=="temperature"){

            if(inputTypeValue=="Kelvin"  &&  resultTypeValue=="Kelvin" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kelvin"  &&  resultTypeValue=="Celsius" ) {
            
                answer=(Number (input.value) - 273.15)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kelvin"  &&  resultTypeValue=="Farenheit" ) {
            
                answer=((Number (input.value) - 273.15 ) * (9/5) + 32 )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kelvin"  &&  resultTypeValue=="Rankine" ) {
            
                answer=((Number (input.value) -273.15) * 1.8 + 491.67)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kelvin"  &&  resultTypeValue=="Reaumur" ) {
            
                answer=((Number (input.value) - 273.15 ) * 0.8 )
                result.value=pointer(answer)
            
            }





            else if(inputTypeValue=="Celsius"  &&  resultTypeValue=="Kelvin" ) {

                answer=(Number (input.value) + 273.15 )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Celsius"  &&  resultTypeValue=="Celsius" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Celsius"  &&  resultTypeValue=="Farenheit" ) {
            
                answer=(Number (input.value) * 1.8 + 32)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Celsius"  &&  resultTypeValue=="Rankine" ) {
            
                answer=(Number (input.value) * 1.8000+ 491.67)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Celsius"  &&  resultTypeValue=="Reaumur" ) {
            
                answer=(Number (input.value) * 0.80000)
                result.value=pointer(answer)
            
            }
            



            
            else if(inputTypeValue=="Farenheit"  &&  resultTypeValue=="Kelvin" ) {

                answer=((Number (input.value) -32)/1.8 + 273.15 )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Farenheit"  &&  resultTypeValue=="Celsius" ) {
            
                answer=((Number (input.value) -32)/1.8)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Farenheit"  &&  resultTypeValue=="Farenheit" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Farenheit"  &&  resultTypeValue=="Rankine" ) {
            
                answer=(Number (input.value)- 32+ 491.67 )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Farenheit"  &&  resultTypeValue=="Reaumur" ) {
            
                answer=((Number (input.value) - 32) * 0.44444 )
                result.value=pointer(answer)
            
            }





            else if(inputTypeValue=="Rankine"  &&  resultTypeValue=="Kelvin" ) {

                answer=((Number (input.value) - 491.67)/1.8 + 273.15 )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Rankine"  &&  resultTypeValue=="Celsius" ) {
            
                answer=(Number (input.value) - 491.67) / 1.8
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Rankine"  &&  resultTypeValue=="Farenheit" ) {
            
                answer=(Number (input.value) - 491.67 + 32.00)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Rankine"  &&  resultTypeValue=="Rankine" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Rankine"  &&  resultTypeValue=="Reaumur" ) {
            
                answer=((Number (input.value) - 491.67) * 0.44444 )
                result.value=pointer(answer)
            
            }





            else if(inputTypeValue=="Reaumur"  &&  resultTypeValue=="Kelvin" ) {

                answer=((Number (input.value) / 0.8) + 273.15 )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Reaumur"  &&  resultTypeValue=="Celsius" ) {
            
                answer=(Number (input.value) / 0.8 )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Reaumur"  &&  resultTypeValue=="Farenheit" ) {
            
                answer=(Number (input.value) * 2.2500 + 32.00)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Reaumur"  &&  resultTypeValue=="Rankine" ) {
            
                answer=(Number (input.value) * 2.2500 + 491.67 )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Reaumur"  &&  resultTypeValue=="Reaumur" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }



            else if(inputTypeValue=="triple point of water"  &&  resultTypeValue=="Kelvin" ) {

                answer=273.16
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="triple point of water"  &&  resultTypeValue=="Celsius" ) {
            
                answer=0.01
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="triple point of water"  &&  resultTypeValue=="Farenheit" ) {
            
                answer=32.018
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="triple point of water"  &&  resultTypeValue=="Rankine" ) {
            
                answer=491.688
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="triple point of water"  &&  resultTypeValue=="Reaumur" ) {
            
                answer=0.008
                result.value=pointer(answer)
            
            }
        }


        /*----------------------------------------------------------- data -----------------------------------------------------------*/
        /*----------------------------------------------------------- data -----------------------------------------------------------*/
        /*----------------------------------------------------------- data -----------------------------------------------------------*/

        else if (main_selectValue=="data"){

            if(inputTypeValue=="bit"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="bit"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 0.25)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="bit"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 0.125)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="bit"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 0.0009765625)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="bit"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 0.0001220703)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="bit"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 9.536743164E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="bit"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 1.192092895E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="bit"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 9.313225746E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="bit"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 1.164153218E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="bit"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 9.094947017E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="bit"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 1.136868377E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }
            



            else if(inputTypeValue=="nibble"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 4)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="nibble"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="nibble"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 0.5)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="nibble"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 0.00390625)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="nibble"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 0.0004882813)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="nibble"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 0.0000038147)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="nibble"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 4.768371582E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="nibble"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 3.725290298E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="nibble"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 4.656612873E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="nibble"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 3.637978807E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="nibble"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 4.547473508E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }





            else if(inputTypeValue=="byte"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 8)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="byte"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 2)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="byte"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="byte"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 0.0078125)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="byte"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 0.0009765625)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="byte"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 0.0000076294)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="byte"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 9.536743164E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="byte"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 7.450580596E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="byte"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 9.313225746E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="byte"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 7.275957614E-12)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="byte"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 9.094947017E-13)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }




            else if(inputTypeValue=="kilobit"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 1024)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilobit"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 256)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilobit"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 128)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilobit"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilobit"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 0.125)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilobit"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 0.0009765625)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="kilobit"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 0.0001220703)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="kilobit"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 9.536743164E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="kilobit"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 1.192092895E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="kilobit"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 9.313225746E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="kilobit"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 1.164153218E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }





            else if(inputTypeValue=="kilobyte"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 8192)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilobyte"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 2048)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilobyte"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 1024)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilobyte"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 8)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilobyte"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilobyte"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 0.0078125)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="kilobyte"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 0.0009765625)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="kilobyte"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 0.0000076294)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="kilobyte"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 9.536743164E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="kilobyte"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 7.450580596E-9)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="kilobyte"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 9.313225746E-10)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }




            else if(inputTypeValue=="megabit"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 1048576)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="megabit"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 262144)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="megabit"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 131072)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="megabit"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 1024)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="megabit"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 128)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="megabit"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="megabit"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 0.125)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="megabit"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 0.0009765625)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="megabit"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 0.0001220703)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="megabit"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 9.536743164E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="megabit"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 1.192092895E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }





            else if(inputTypeValue=="megabyte"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 8388608)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="megabyte"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 2097152)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="megabyte"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 1048576)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="megabyte"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 8192)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="megabyte"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 1024)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="megabyte"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="megabyte"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="megabyte"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 0.0078125)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="megabyte"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 0.0009765625)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="megabyte"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 0.0000076294)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="megabyte"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 9.536743164E-7)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }




            else if(inputTypeValue=="gigabit"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 1073741824)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gigabit"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 268435456)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gigabit"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 134217728)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gigabit"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 1048576)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gigabit"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 131072)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gigabit"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 1024)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="gigabit"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 128)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="gigabit"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="gigabit"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 0.125)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="gigabit"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 0.0009765625)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="gigabit"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 0.0001220703)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }




            else if(inputTypeValue=="gigabyte"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 8589934592)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gigabyte"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 2147483648)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gigabyte"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 1073741824)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gigabyte"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 8388608)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gigabyte"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 1048576)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="gigabyte"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 8192)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="gigabyte"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 1024)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="gigabyte"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="gigabyte"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="gigabyte"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 0.0078125)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="gigabyte"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 0.0009765625)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }





            else if(inputTypeValue=="terabit"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 1099511627776)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="terabit"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 274877906944)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="terabit"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 137438953472)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="terabit"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 1073741824)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="terabit"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 134217728)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="terabit"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 1048576)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="terabit"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 131072)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="terabit"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 1024)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="terabit"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 128)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="terabit"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="terabit"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 0.125)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }




            else if(inputTypeValue=="terabyte"  &&  resultTypeValue=="bit" ) {

                answer=(Number (input.value) * 8796093022208)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="terabyte"  &&  resultTypeValue=="nibble" ) {
            
                answer=(Number (input.value) * 2199023255552)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="terabyte"  &&  resultTypeValue=="byte" ) {
            
                answer=(Number (input.value) * 1099511627776)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="terabyte"  &&  resultTypeValue=="kilobit" ) {
            
                answer=(Number (input.value) * 8589934592)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="terabyte"  &&  resultTypeValue=="kilobyte" ) {
            
                answer=(Number (input.value) * 1073741824)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="terabyte"  &&  resultTypeValue=="megabit" ) {
            
                answer=(Number (input.value) * 8388608)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="terabyte"  &&  resultTypeValue=="megabyte" ) {
            
                answer=(Number (input.value) * 1048576)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="terabyte"  &&  resultTypeValue=="gigabit" ) {
            
                answer=(Number (input.value) * 8192)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="terabyte"  &&  resultTypeValue=="gigabyte" ) {
            
                answer=(Number (input.value) * 1024)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="terabyte"  &&  resultTypeValue=="terabit" ) {
            
                answer=(Number (input.value) * 8)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="terabyte"  &&  resultTypeValue=="terabyte" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }
        }


        /*----------------------------------------------------------- ენერგია -----------------------------------------------------------*/
        /*----------------------------------------------------------- ენერგია -----------------------------------------------------------*/
        /*----------------------------------------------------------- ენერგია -----------------------------------------------------------*/

        else if (main_selectValue=="energy"){

            if(inputTypeValue=="Joule"  &&  resultTypeValue=="Joule" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Joule"  &&  resultTypeValue=="Kilojoul" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Joule"  &&  resultTypeValue=="Watt hour" ) {
            
                answer=(Number (input.value) * 0.0002777778)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Joule"  &&  resultTypeValue=="Watt second" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Joule"  &&  resultTypeValue=="Kilowatt hour" ) {
            
                answer=(Number (input.value) * 2.777777777E-7)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Joule"  &&  resultTypeValue=="calorie" ) {
            
                answer=(Number (input.value) * 0.2390057361)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Joule"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 3.776726714E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Joule"  &&  resultTypeValue=="Kilocalorie" ) {
            
                answer=(Number (input.value) * 0.0002390057)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Joule"  &&  resultTypeValue=="Electron-volt" ) {
            
                answer=(Number (input.value) * 6241506363094000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }
            



            else if(inputTypeValue=="Kilojoul"  &&  resultTypeValue=="Joule" ) {

                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilojoul"  &&  resultTypeValue=="Kilojoul" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilojoul"  &&  resultTypeValue=="Watt hour" ) {
            
                answer=(Number (input.value) * 0.2777777778)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilojoul"  &&  resultTypeValue=="Watt second" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilojoul"  &&  resultTypeValue=="Kilowatt hour" ) {
            
                answer=(Number (input.value) * 0.0002777778)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilojoul"  &&  resultTypeValue=="calorie" ) {
            
                answer=(Number (input.value) * 239.00573614)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilojoul"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 0.0003776727)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilojoul"  &&  resultTypeValue=="Kilocalorie" ) {
            
                answer=(Number (input.value) * 0.2390057361)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilojoul"  &&  resultTypeValue=="Electron-volt" ) {
            
                answer=(Number (input.value) * 6.241506363E+21)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }





            else if(inputTypeValue=="Watt hour"  &&  resultTypeValue=="Joule" ) {

                answer=(Number (input.value) * 3600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Watt hour"  &&  resultTypeValue=="Kilojoul" ) {
            
                answer=(Number (input.value) * 3.6)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Watt hour"  &&  resultTypeValue=="Watt hour" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Watt hour"  &&  resultTypeValue=="Watt second" ) {
            
                answer=(Number (input.value) * 3600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Watt hour"  &&  resultTypeValue=="Kilowatt hour" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Watt hour"  &&  resultTypeValue=="calorie" ) {
            
                answer=(Number (input.value) * 860.4206501)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Watt hour"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 0.0013596216)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Watt hour"  &&  resultTypeValue=="Kilocalorie" ) {
            
                answer=(Number (input.value) * 0.8604206501)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Watt hour"  &&  resultTypeValue=="Electron-volt" ) {
            
                answer=(Number (input.value) * 2.24694229E+22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }




            else if(inputTypeValue=="Watt second"  &&  resultTypeValue=="Joule" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Watt second"  &&  resultTypeValue=="Kilojoul" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Watt second"  &&  resultTypeValue=="Watt hour" ) {
            
                answer=(Number (input.value) * 0.0002777778)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Watt second"  &&  resultTypeValue=="Watt second" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Watt second"  &&  resultTypeValue=="Kilowatt hour" ) {
            
                answer=(Number (input.value) * 2.777777777E-7)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Watt second"  &&  resultTypeValue=="calorie" ) {
            
                answer=(Number (input.value) * 0.2390057361)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Watt second"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 3.776726714E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Watt second"  &&  resultTypeValue=="Kilocalorie" ) {
            
                answer=(Number (input.value) * 0.0002390057)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Watt second"  &&  resultTypeValue=="Electron-volt" ) {
            
                answer=(Number (input.value) * 6241506363094000000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }





            else if(inputTypeValue=="Kilowatt hour"  &&  resultTypeValue=="Joule" ) {

                answer=(Number (input.value) * 3600000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilowatt hour"  &&  resultTypeValue=="Kilojoul" ) {
            
                answer=(Number (input.value) * 3600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilowatt hour"  &&  resultTypeValue=="Watt hour" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilowatt hour"  &&  resultTypeValue=="Watt second" ) {
            
                answer=(Number (input.value) * 3600000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilowatt hour"  &&  resultTypeValue=="Kilowatt hour" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilowatt hour"  &&  resultTypeValue=="calorie" ) {
            
                answer=(Number (input.value) * 860420.6501)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilowatt hour"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 1.3596216173)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilowatt hour"  &&  resultTypeValue=="Kilocalorie" ) {
            
                answer=(Number (input.value) * 860.4206501)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilowatt hour"  &&  resultTypeValue=="Electron-volt" ) {
            
                answer=(Number (input.value) * 2.24694229E+25)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }




            else if(inputTypeValue=="calorie"  &&  resultTypeValue=="Joule" ) {

                answer=(Number (input.value) * 4.184)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="calorie"  &&  resultTypeValue=="Kilojoul" ) {
            
                answer=(Number (input.value) * 0.004184)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="calorie"  &&  resultTypeValue=="Watt hour" ) {
            
                answer=(Number (input.value) * 0.0011622222)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="calorie"  &&  resultTypeValue=="Watt second" ) {
            
                answer=(Number (input.value) * 4.184)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="calorie"  &&  resultTypeValue=="Kilowatt hour" ) {
            
                answer=(Number (input.value) * 0.0000011622)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="calorie"  &&  resultTypeValue=="calorie" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="calorie"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 0.0000015802)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="calorie"  &&  resultTypeValue=="Kilocalorie" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="calorie"  &&  resultTypeValue=="Electron-volt" ) {
            
                answer=(Number (input.value) * 26114462623185002000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }





            else if(inputTypeValue=="horse power"  &&  resultTypeValue=="Joule" ) {

                answer=(Number (input.value) * 2647795.5)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="Kilojoul" ) {
            
                answer=(Number (input.value) * 2647.7955)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="Watt hour" ) {
            
                answer=(Number (input.value) * 735.49875)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="Watt second" ) {
            
                answer=(Number (input.value) * 2647795.5)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="Kilowatt hour" ) {
            
                answer=(Number (input.value) * 0.73549875)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="calorie" ) {
            
                answer=(Number (input.value) * 632838.31262)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="Kilocalorie" ) {
            
                answer=(Number (input.value) * 632.83831262)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="Electron-volt" ) {
            
                answer=(Number (input.value) * 1.652623246E+25)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }




            else if(inputTypeValue=="Kilocalorie"  &&  resultTypeValue=="Joule" ) {

                answer=(Number (input.value) * 4184)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilocalorie"  &&  resultTypeValue=="Kilojoul" ) {
            
                answer=(Number (input.value) * 4.184)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilocalorie"  &&  resultTypeValue=="Watt hour" ) {
            
                answer=(Number (input.value) * 1.1622222222)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilocalorie"  &&  resultTypeValue=="Watt second" ) {
            
                answer=(Number (input.value) * 4184)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilocalorie"  &&  resultTypeValue=="Kilowatt hour" ) {
            
                answer=(Number (input.value) * 0.0011622222)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilocalorie"  &&  resultTypeValue=="calorie" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilocalorie"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 0.0015801825)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilocalorie"  &&  resultTypeValue=="Kilocalorie" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilocalorie"  &&  resultTypeValue=="Electron-volt" ) {
            
                answer=(Number (input.value) * 2.611446262E+22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }




            else if(inputTypeValue=="Electron-volt"  &&  resultTypeValue=="Joule" ) {

                answer=(Number (input.value) * 1.60217733E-19)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Electron-volt"  &&  resultTypeValue=="Kilojoul" ) {
            
                answer=(Number (input.value) * 1.60217733E-22)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Electron-volt"  &&  resultTypeValue=="Watt hour" ) {
            
                answer=(Number (input.value) * 4.450492583E-23)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Electron-volt"  &&  resultTypeValue=="Watt second" ) {
            
                answer=(Number (input.value) * 1.60217733E-19)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Electron-volt"  &&  resultTypeValue=="Kilowatt hour" ) {
            
                answer=(Number (input.value) * 4.450492583E-26)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Electron-volt"  &&  resultTypeValue=="calorie" ) {
            
                answer=(Number (input.value) * 3.829295721E-20)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Electron-volt"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 6.050985923E-26)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Electron-volt"  &&  resultTypeValue=="Kilocalorie" ) {
            
                answer=(Number (input.value) * 3.829295721E-23)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Electron-volt"  &&  resultTypeValue=="Electron-volt" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }





            else if(inputTypeValue=="Rydberg const"  &&  resultTypeValue=="Joule" ) {

                answer=(Number (input.value) * 2.179874099E-18)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Rydberg const"  &&  resultTypeValue=="Kilojoul" ) {
            
                answer=(Number (input.value) * 2.179874099E-21)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Rydberg const"  &&  resultTypeValue=="Watt hour" ) {
            
                answer=(Number (input.value) * 6.055205833E-22)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Rydberg const"  &&  resultTypeValue=="Watt second" ) {
            
                answer=(Number (input.value) * 2.179874099E-18)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Rydberg const"  &&  resultTypeValue=="Kilowatt hour" ) {
            
                answer=(Number (input.value) * 6.055205833E-25)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Rydberg const"  &&  resultTypeValue=="calorie" ) {
            
                answer=(Number (input.value) * 5.210024139E-19)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Rydberg const"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 8.232788748E-25)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Rydberg const"  &&  resultTypeValue=="Kilocalorie" ) {
            
                answer=(Number (input.value) * 5.210024139E-22)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Rydberg const"  &&  resultTypeValue=="Electron-volt" ) {
            
                answer=(Number (input.value) * 13.605698066)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }



        }


        /*----------------------------------------------------------- წნევა -----------------------------------------------------------*/
        /*----------------------------------------------------------- წნევა -----------------------------------------------------------*/
        /*----------------------------------------------------------- წნევა -----------------------------------------------------------*/

        else if (main_selectValue=="pressure"){

            if(inputTypeValue=="Pascal"  &&  resultTypeValue=="Pascal" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Pascal"  &&  resultTypeValue=="Bar" ) {
            
                answer=(Number (input.value) * 0.00001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Pascal"  &&  resultTypeValue=="Atmosphere" ) {
            
                answer=(Number (input.value) * 0.0000098692)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Pascal"  &&  resultTypeValue=="Torr" ) {
            
                answer=(Number (input.value) * 0.0075006168)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Pascal"  &&  resultTypeValue=="psi" ) {
            
                answer=(Number (input.value) * 0.0001450377)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Pascal"  &&  resultTypeValue=="ksi" ) {
            
                answer=(Number (input.value) * 1.450377377E-7)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Pascal"  &&  resultTypeValue=="newton/m" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Pascal"  &&  resultTypeValue=="newton/cm" ) {
            
                answer=(Number (input.value) * 0.0001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Pascal"  &&  resultTypeValue=="newton/mm" ) {
            
                answer=(Number (input.value) * 0.000001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }
            



            else if(inputTypeValue=="Bar"  &&  resultTypeValue=="Pascal" ) {

                answer=(Number (input.value) * 100000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Bar"  &&  resultTypeValue=="Bar" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Bar"  &&  resultTypeValue=="Atmosphere" ) {
            
                answer=(Number (input.value) * 0.9869232667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Bar"  &&  resultTypeValue=="Torr" ) {
            
                answer=(Number (input.value) * 750.0616827)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Bar"  &&  resultTypeValue=="psi" ) {
            
                answer=(Number (input.value) * 14.503773773)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Bar"  &&  resultTypeValue=="newton/m" ) {
            
                answer=(Number (input.value) * 100000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Bar"  &&  resultTypeValue=="newton/cm" ) {
            
                answer=(Number (input.value) * 10)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Bar"  &&  resultTypeValue=="newton/mm" ) {
            
                answer=(Number (input.value) * 0.1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Bar"  &&  resultTypeValue=="ksi" ) {
            
                answer=(Number (input.value) * 0.0145037738)
                result.value=pointer(answer)
            
            }





            else if(inputTypeValue=="Atmosphere"  &&  resultTypeValue=="Pascal" ) {

                answer=(Number (input.value) * 101325)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Atmosphere"  &&  resultTypeValue=="Bar" ) {
            
                answer=(Number (input.value) * 1.01325)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Atmosphere"  &&  resultTypeValue=="Atmosphere" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Atmosphere"  &&  resultTypeValue=="Torr" ) {
            
                answer=(Number (input.value) * 760)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Atmosphere"  &&  resultTypeValue=="psi" ) {
            
                answer=(Number (input.value) * 14.695948775)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Atmosphere"  &&  resultTypeValue=="newton/m" ) {
            
                answer=(Number (input.value) * 101325)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Atmosphere"  &&  resultTypeValue=="newton/cm" ) {
            
                answer=(Number (input.value) * 10.1325)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Atmosphere"  &&  resultTypeValue=="newton/mm" ) {
            
                answer=(Number (input.value) * 0.101325)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Atmosphere"  &&  resultTypeValue=="ksi" ) {
            
                answer=(Number (input.value) * 0.0146959488)
                result.value=pointer(answer)
            
            }




            else if(inputTypeValue=="Torr"  &&  resultTypeValue=="Pascal" ) {

                answer=(Number (input.value) * 133.32236842)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Torr"  &&  resultTypeValue=="Bar" ) {
            
                answer=(Number (input.value) * 0.0013332237)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Torr"  &&  resultTypeValue=="Atmosphere" ) {
            
                answer=(Number (input.value) * 0.0013157895)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Torr"  &&  resultTypeValue=="Torr" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Torr"  &&  resultTypeValue=="psi" ) {
            
                answer=(Number (input.value) * 0.0193367747)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Torr"  &&  resultTypeValue=="newton/m" ) {
            
                answer=(Number (input.value) * 133.32236842)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Torr"  &&  resultTypeValue=="newton/cm" ) {
            
                answer=(Number (input.value) * 0.0133322368)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Torr"  &&  resultTypeValue=="newton/mm" ) {
            
                answer=(Number (input.value) * 0.0001333224)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Torr"  &&  resultTypeValue=="ksi" ) {
            
                answer=(Number (input.value) * 0.0000193368)
                result.value=pointer(answer)
            
            }





            else if(inputTypeValue=="psi"  &&  resultTypeValue=="Pascal" ) {

                answer=(Number (input.value) * 6894.7572932)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="psi"  &&  resultTypeValue=="Bar" ) {
            
                answer=(Number (input.value) * 0.0689475729)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="psi"  &&  resultTypeValue=="Atmosphere" ) {
            
                answer=(Number (input.value) * 0.0680459639)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="psi"  &&  resultTypeValue=="Torr" ) {
            
                answer=(Number (input.value) * 51.714932572)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="psi"  &&  resultTypeValue=="psi" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="psi"  &&  resultTypeValue=="newton/m" ) {
            
                answer=(Number (input.value) * 6894.7572932)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="psi"  &&  resultTypeValue=="newton/cm" ) {
            
                answer=(Number (input.value) * 0.6894757293)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="psi"  &&  resultTypeValue=="newton/mm" ) {
            
                answer=(Number (input.value) * 0.0068947573)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="psi"  &&  resultTypeValue=="ksi" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }




            else if(inputTypeValue=="newton/m"  &&  resultTypeValue=="Pascal" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/m"  &&  resultTypeValue=="Bar" ) {
            
                answer=(Number (input.value) * 0.00001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/m"  &&  resultTypeValue=="Atmosphere" ) {
            
                answer=(Number (input.value) * 0.0000098692)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/m"  &&  resultTypeValue=="Torr" ) {
            
                answer=(Number (input.value) * 0.0075006168)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/m"  &&  resultTypeValue=="psi" ) {
            
                answer=(Number (input.value) * 0.0001450377)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/m"  &&  resultTypeValue=="newton/m" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="newton/m"  &&  resultTypeValue=="newton/cm" ) {
            
                answer=(Number (input.value) * 0.0001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="newton/m"  &&  resultTypeValue=="newton/mm" ) {
            
                answer=(Number (input.value) * 0.000001)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="newton/m"  &&  resultTypeValue=="ksi" ) {
            
                answer=(Number (input.value) * 1.450377377E-7)
                result.value=pointer(answer)
            
            }





            else if(inputTypeValue=="newton/cm"  &&  resultTypeValue=="Pascal" ) {

                answer=(Number (input.value) * 10000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/cm"  &&  resultTypeValue=="Bar" ) {
            
                answer=(Number (input.value) * 0.1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/cm"  &&  resultTypeValue=="Atmosphere" ) {
            
                answer=(Number (input.value) * 0.0986923267)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/cm"  &&  resultTypeValue=="Torr" ) {
            
                answer=(Number (input.value) * 75.00616827)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/cm"  &&  resultTypeValue=="psi" ) {
            
                answer=(Number (input.value) * 1.4503773773)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/cm"  &&  resultTypeValue=="newton/m" ) {
            
                answer=(Number (input.value) * 10000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="newton/cm"  &&  resultTypeValue=="newton/cm" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="newton/cm"  &&  resultTypeValue=="newton/mm" ) {
            
                answer=(Number (input.value) * 0.01)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="newton/cm"  &&  resultTypeValue=="ksi" ) {
            
                answer=(Number (input.value) * 0.0014503774)
                result.value=pointer(answer)
            
            }




            else if(inputTypeValue=="newton/mm"  &&  resultTypeValue=="Pascal" ) {

                answer=(Number (input.value) * 1000000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/mm"  &&  resultTypeValue=="Bar" ) {
            
                answer=(Number (input.value) * 10)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/mm"  &&  resultTypeValue=="Atmosphere" ) {
            
                answer=(Number (input.value) * 9.8692326672)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/mm"  &&  resultTypeValue=="Torr" ) {
            
                answer=(Number (input.value) * 7500.616827)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/mm"  &&  resultTypeValue=="psi" ) {
            
                answer=(Number (input.value) * 145.03773773)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton/mm"  &&  resultTypeValue=="newton/m" ) {
            
                answer=(Number (input.value) * 1000000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="newton/mm"  &&  resultTypeValue=="newton/cm" ) {
            
                answer=(Number (input.value) * 100)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="newton/mm"  &&  resultTypeValue=="newton/mm" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="newton/mm"  &&  resultTypeValue=="ksi" ) {
            
                answer=(Number (input.value) * 0.1450377377)
                result.value=pointer(answer)
            
            }



            else if(inputTypeValue=="ksi"  &&  resultTypeValue=="Pascal" ) {

                answer=(Number (input.value) * 6894757.2932)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ksi"  &&  resultTypeValue=="Bar" ) {
            
                answer=(Number (input.value) * 68.947572932)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ksi"  &&  resultTypeValue=="Atmosphere" ) {
            
                answer=(Number (input.value) * 68.04596391)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ksi"  &&  resultTypeValue=="Torr" ) {
            
                answer=(Number (input.value) * 51714.932572)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ksi"  &&  resultTypeValue=="psi" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="ksi"  &&  resultTypeValue=="newton/m" ) {
            
                answer=(Number (input.value) * 6894757.2932)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="ksi"  &&  resultTypeValue=="newton/cm" ) {
            
                answer=(Number (input.value) * 689.47572932)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="ksi"  &&  resultTypeValue=="newton/mm" ) {
            
                answer=(Number (input.value) * 6.8947572932)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="ksi"  &&  resultTypeValue=="ksi" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }

        }


        /*----------------------------------------------------------- სიმძლავრე -----------------------------------------------------------*/
        /*----------------------------------------------------------- სიმძლავრე -----------------------------------------------------------*/
        /*----------------------------------------------------------- სიმძლავრე -----------------------------------------------------------*/

        else if (main_selectValue=="power"){

            if(inputTypeValue=="watt"  &&  resultTypeValue=="watt" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="watt"  &&  resultTypeValue=="kilowatt" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="watt"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 0.0013410221)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="watt"  &&  resultTypeValue=="joule/hour" ) {
            
                answer=(Number (input.value) * 3600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="watt"  &&  resultTypeValue=="calorie/hour" ) {
            
                answer=(Number (input.value) * 860.4206501)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="watt"  &&  resultTypeValue=="kilovolt/ampere" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="watt"  &&  resultTypeValue=="volt/ampere" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }
            



            else if(inputTypeValue=="kilowatt"  &&  resultTypeValue=="watt" ) {

                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilowatt"  &&  resultTypeValue=="kilowatt" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilowatt"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 1.3410220896)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilowatt"  &&  resultTypeValue=="joule/hour" ) {
            
                answer=(Number (input.value) * 3600000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilowatt"  &&  resultTypeValue=="calorie/hour" ) {
            
                answer=(Number (input.value) * 860420.6501)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilowatt"  &&  resultTypeValue=="kilovolt/ampere" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="kilowatt"  &&  resultTypeValue=="volt/ampere" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }





            else if(inputTypeValue=="horse power"  &&  resultTypeValue=="watt" ) {

                answer=(Number (input.value) * 745.69987158)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="kilowatt" ) {
            
                answer=(Number (input.value) * 0.7456998716)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="joule/hour" ) {
            
                answer=(Number (input.value) * 2684519.5377)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="calorie/hour" ) {
            
                answer=(Number (input.value) * 641615.56828)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="kilovolt/ampere" ) {
            
                answer=(Number (input.value) * 0.7456998716)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="horse power"  &&  resultTypeValue=="volt/ampere" ) {
            
                answer=(Number (input.value) * 745.69987158)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }




            else if(inputTypeValue=="joule/hour"  &&  resultTypeValue=="watt" ) {

                answer=(Number (input.value) * 0.0002777778)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="joule/hour"  &&  resultTypeValue=="kilowatt" ) {
            
                answer=(Number (input.value) * 2.777777777E-7)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="joule/hour"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 3.725061359E-7)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="joule/hour"  &&  resultTypeValue=="joule/hour" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="joule/hour"  &&  resultTypeValue=="calorie/hour" ) {
            
                answer=(Number (input.value) * 0.2390057361)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="joule/hour"  &&  resultTypeValue=="kilovolt/ampere" ) {
            
                answer=(Number (input.value) * 2.777777777E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="joule/hour"  &&  resultTypeValue=="volt/ampere" ) {
            
                answer=(Number (input.value) * 0.0002777778)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }





            else if(inputTypeValue=="calorie/hour"  &&  resultTypeValue=="watt" ) {

                answer=(Number (input.value) * 0.0011622222)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="calorie/hour"  &&  resultTypeValue=="kilowatt" ) {
            
                answer=(Number (input.value) * 0.0000011622)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="calorie/hour"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 0.0000015586)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="calorie/hour"  &&  resultTypeValue=="joule/hour" ) {
            
                answer=(Number (input.value) * 4.184)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="calorie/hour"  &&  resultTypeValue=="calorie/hour" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="calorie/hour"  &&  resultTypeValue=="kilovolt/ampere" ) {
            
                answer=(Number (input.value) * 0.0000011622)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="calorie/hour"  &&  resultTypeValue=="volt/ampere" ) {
            
                answer=(Number (input.value) * 0.0011622222)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }




            else if(inputTypeValue=="kilovolt/ampere"  &&  resultTypeValue=="watt" ) {

                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilovolt/ampere"  &&  resultTypeValue=="kilowatt" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilovolt/ampere"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 1.3410220896)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilovolt/ampere"  &&  resultTypeValue=="joule/hour" ) {
            
                answer=(Number (input.value) * 3600000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilovolt/ampere"  &&  resultTypeValue=="calorie/hour" ) {
            
                answer=(Number (input.value) * 860420.6501)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilovolt/ampere"  &&  resultTypeValue=="kilovolt/ampere" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="kilovolt/ampere"  &&  resultTypeValue=="volt/ampere" ) {
            
                answer=(Number (input.value) * 1000)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }





            else if(inputTypeValue=="volt/ampere"  &&  resultTypeValue=="watt" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="volt/ampere"  &&  resultTypeValue=="kilowatt" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="volt/ampere"  &&  resultTypeValue=="horse power" ) {
            
                answer=(Number (input.value) * 0.0013410221)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="volt/ampere"  &&  resultTypeValue=="joule/hour" ) {
            
                answer=(Number (input.value) * 3600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="volt/ampere"  &&  resultTypeValue=="calorie/hour" ) {
            
                answer=(Number (input.value) * 860.4206501)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="volt/ampere"  &&  resultTypeValue=="kilovolt/ampere" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="volt/ampere"  &&  resultTypeValue=="volt/ampere" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }





        }


        /*----------------------------------------------------------- კუთხე -----------------------------------------------------------*/
        /*----------------------------------------------------------- კუთხე -----------------------------------------------------------*/
        /*----------------------------------------------------------- კუთხე -----------------------------------------------------------*/

        else if (main_selectValue=="angle"){

            if(inputTypeValue=="Degree"  &&  resultTypeValue=="Degree" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Degree"  &&  resultTypeValue=="Radian" ) {
            
                answer=(Number (input.value) * (Math.PI/180))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Degree"  &&  resultTypeValue=="Gradian" ) {
            
                answer=(Number (input.value) * (200/180) )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Degree"  &&  resultTypeValue=="Milliradian" ) {
            
                answer=(Number (input.value) * (Math.PI * 1000/180))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Degree"  &&  resultTypeValue=="Minute/arc" ) {
            
                answer=(Number (input.value) * 60)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Degree"  &&  resultTypeValue=="second/arc" ) {
            
                answer=(Number (input.value) * 3600)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }
            



            else if(inputTypeValue=="Radian"  &&  resultTypeValue=="Degree" ) {

                answer=(Number (input.value) * (180/Math.PI))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Radian"  &&  resultTypeValue=="Radian" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Radian"  &&  resultTypeValue=="Gradian" ) {
            
                answer=(Number (input.value) * (200/Math.PI))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Radian"  &&  resultTypeValue=="Milliradian" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Radian"  &&  resultTypeValue=="Minute/arc" ) {
            
                answer=(Number (input.value) * 60 * 180 / Math.PI)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Radian"  &&  resultTypeValue=="second/arc" ) {
            
                answer=(Number (input.value) * 3600 * 180 / Math.PI)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }





            else if(inputTypeValue=="Gradian"  &&  resultTypeValue=="Degree" ) {

                answer=(Number (input.value) * 180 / 200)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Gradian"  &&  resultTypeValue=="Radian" ) {
            
                answer=(Number (input.value) * Math.PI / 200)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Gradian"  &&  resultTypeValue=="Gradian" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Gradian"  &&  resultTypeValue=="Milliradian" ) {
            
                answer=(Number (input.value) * Math.PI  * 1000 / 200)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Gradian"  &&  resultTypeValue=="Minute/arc" ) {
            
                answer=(Number (input.value) * 54)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Gradian"  &&  resultTypeValue=="second/arc" ) {
            
                answer=(Number (input.value) * 3240)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }




            else if(inputTypeValue=="Milliradian"  &&  resultTypeValue=="Degree" ) {

                answer=(Number (input.value) * (180 / (Math.PI * 1000)))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Milliradian"  &&  resultTypeValue=="Radian" ) {
            
                answer=(Number (input.value) / 1000 )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Milliradian"  &&  resultTypeValue=="Gradian" ) {
            
                answer=(Number (input.value) * 200 / (1000 * Math.PI))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Milliradian"  &&  resultTypeValue=="Milliradian" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Milliradian"  &&  resultTypeValue=="Minute/arc" ) {
            
                answer=(Number (input.value) * 60 * 180  / (1000 * Math.PI))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Milliradian"  &&  resultTypeValue=="second/arc" ) {
            
                answer=(Number (input.value) * 3600 * 180  / (1000 * Math.PI))
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }




            else if(inputTypeValue=="Minute/arc"  &&  resultTypeValue=="Degree" ) {

                answer=(Number (input.value) / 60)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Minute/arc"  &&  resultTypeValue=="Radian" ) {
            
                answer=(Number (input.value) * Math.PI / (60 * 180))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Minute/arc"  &&  resultTypeValue=="Gradian" ) {
            
                answer=(Number (input.value) / 54)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Minute/arc"  &&  resultTypeValue=="Milliradian" ) {
            
                answer=(Number (input.value) * Math.PI * 1000 / (60 * 180))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Minute/arc"  &&  resultTypeValue=="Minute/arc" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Minute/arc"  &&  resultTypeValue=="second/arc" ) {
            
                answer=(Number (input.value) * 60)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }




            else if(inputTypeValue=="second/arc"  &&  resultTypeValue=="Degree" ) {

                answer=(Number (input.value) / 3600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="second/arc"  &&  resultTypeValue=="Radian" ) {
            
                answer=(Number (input.value) * Math.PI  / (3600 * 180))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="second/arc"  &&  resultTypeValue=="Gradian" ) {
            
                answer=(Number (input.value) / 3240 )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="second/arc"  &&  resultTypeValue=="Milliradian" ) {
            
                answer=(Number (input.value) * Math.PI * 1000 / (3600 * 180))
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="second/arc"  &&  resultTypeValue=="Minute/arc" ) {
            
                answer=(Number (input.value) / 60
                )
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="second/arc"  &&  resultTypeValue=="second/arc" ) {
            
                answer=(Number (input.value) * 1 )
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }


        }


        /*----------------------------------------------------------- ძალა -----------------------------------------------------------*/
        /*----------------------------------------------------------- ძალა -----------------------------------------------------------*/
        /*----------------------------------------------------------- ძალა -----------------------------------------------------------*/

        else if (main_selectValue=="force"){

            if(inputTypeValue=="newton"  &&  resultTypeValue=="newton" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton"  &&  resultTypeValue=="kilonewton" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="newton"  &&  resultTypeValue=="dyne" ) {
            
                answer=(Number (input.value) * 100000)
                result.value=pointer(answer)
            
            }
            



            else if(inputTypeValue=="kilonewton"  &&  resultTypeValue=="newton" ) {

                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilonewton"  &&  resultTypeValue=="kilonewton" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="kilonewton"  &&  resultTypeValue=="dyne" ) {
            
                answer=(Number (input.value) * 100000000)
                result.value=pointer(answer)
            
            }





            else if(inputTypeValue=="dyne"  &&  resultTypeValue=="newton" ) {

                answer=(Number (input.value) * 0.00001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="dyne"  &&  resultTypeValue=="kilonewton" ) {
            
                answer=(Number (input.value) * 1.E-8)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="dyne"  &&  resultTypeValue=="dyne" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }


        }
    
        
        /*----------------------------------------------------------- სიჩქარე -----------------------------------------------------------*/
        /*----------------------------------------------------------- სიჩქარე -----------------------------------------------------------*/
        /*----------------------------------------------------------- სიჩქარე -----------------------------------------------------------*/

        else if (main_selectValue=="velocity"){

            if(inputTypeValue=="Meters/second"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 3.6)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 2.2369362921)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 3600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 60)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 0.06)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 11811.023622)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 196.8503937)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 3.280839895)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 0.0372822715)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 0.0006213712)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 3.335640951E-9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 0.0001265823)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000892857)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.000059988)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/second"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 1.9438444924)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 0.2777777778)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 0.6213711922)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 16.666666667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 0.0166666667)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 0.0002777778)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 3280.839895)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 54.680664917)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 0.9113444153)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 0.0103561865)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 0.0001726031)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 9.265669311E-10)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000351617)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000248016)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000166633)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/hour"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 0.5399568035)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }
            



            
            else if(inputTypeValue=="Miles/hour"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 0.44704)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 1.609344)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 1609.344)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 26.8224)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 0.0268224)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 0.00044704)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 5280)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 88)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 1.4666666667)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 0.0166666667)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 0.0002777778)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 1.491164931E-9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000565873)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000399143)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.000026817)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Miles/hour"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 0.8689762419)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Meters/hour"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 0.0002777778)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 0.001)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 0.0006213712)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 0.0166666667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 0.0000166667)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 2.777777777E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 3.280839895)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 0.0546806649)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 0.0009113444)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 0.0000103562)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 1.726031089E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 9.265669311E-13)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 3.516174402E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 2.48015873E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 1.666333399E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/hour"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 0.0005399568)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Meters/minute"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 0.0166666667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 0.06)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 0.0372822715)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 60)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 1)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 0.001)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 0.0000166667)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 196.8503937)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 3.280839895)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 0.0546806649)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 0.0006213712)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 0.0000103562)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 5.559401586E-11)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000021097)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000014881)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 9.998000399E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Meters/minute"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 0.0323974082)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 16.666666667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 60)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 37.282271534)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 60000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 0.0166666667)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 196850.3937)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 3280.839895)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 54.680664917)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 0.6213711922)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 0.0103561865)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 5.559401586E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 0.0021097046)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.0014880952)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.0009998)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/minute"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 32.397408207)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 1000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 3600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 2236.9362921)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 3600000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 60000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 60)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 11811023.622)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 196850.3937)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 3280.839895)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 37.282271534)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 0.6213711922)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 0.0000033356)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 0.1265822785)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.0892857143)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.0599880024)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Kilometers/second"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 1943.8444924)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="foot/hour"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 0.0000846667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 0.0003048)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 0.0001893939)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 0.3048)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 0.00508)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 0.00000508)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 8.466666666E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 0.0166666667)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 0.0002777778)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 0.0000031566)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 5.26094276E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 2.824176006E-13)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 1.071729957E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 7.559523809E-9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 5.078984203E-9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="foot/hour"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 0.0001645788)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="foot/minute"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 0.00508)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 0.018288)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 0.0113636364)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 18.288)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 0.3048)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 0.0003048)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 0.00000508)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 60)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 0.0166666667)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 0.0001893939)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 0.0000031566)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 1.694505603E-11)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 6.430379746E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 4.535714285E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 3.047390521E-7)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="foot/minute"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 0.00987473)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="Foot/second"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 0.3048)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 1.09728)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 0.6818181818)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 1097.28)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 18.288)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 0.018288)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 0.0003048)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 3600)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 60)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 0.0113636364)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 0.0001893939)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 1.016703362E-9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000385823)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000272143)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000182843)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Foot/second"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 0.5924838013)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="mile/minute"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 26.8224)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 96.56064)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 60)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 96560.64)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 1609.344)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 1.609344)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 0.0268224)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 316800)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 5280)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 88)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 0.0166666667)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 8.946989587E-8)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 0.0033952405)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.0023948571)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.0016090222)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="mile/minute"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 52.138574514)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }




            
            else if(inputTypeValue=="mile/second"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 1609.344)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 5793.6384)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 3600)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 5793638.4)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 96560.64)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 96.56064)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 1.609344)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 19008000)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 316800)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 5280)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 60)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 0.0000053682)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 0.2037144304)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.1436914286)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.0965413317)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="mile/second"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 3128.3144708)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="light"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 299792458)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 1079252848.8)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 670616629.38)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 1079252848800)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 17987547480)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 17987547.48)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 299792.458)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 3540855803150)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 59014263386)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 983571056.43)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 11176943.823)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 186282.39705)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 37948.412405)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 26767.18375)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 17983.95069)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="light"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 582749918.36)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }





            else if(inputTypeValue=="1st cosmos"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 7900)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 28440)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 17671.796707)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 28440000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 474000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 474)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 7.9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 93307086.614)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 1555118.1102)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 25918.635171)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 294.52994512)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 4.9088324187)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 0.0000263516)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.7053571429)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.473905219)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="1st cosmos"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 15356.37149)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }

            


            else if(inputTypeValue=="2st cosmos"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 11200)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 40320)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 25053.686471)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 40320000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 672000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 672)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 11.2)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 132283464.57)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 2204724.4094)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 36745.406824)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 417.56144118)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 6.9593573531)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 0.0000373592)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 1.417721519)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.6718656269)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="2st cosmos"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 21771.058315)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }




            else if(inputTypeValue=="3st cosmos"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 16670)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 60012)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 37289.727989)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 60012000)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 1000200)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 1000.2)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 16.67)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 196889763.78)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 3281496.063)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 54691.60105)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 621.49546648)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 10.358257775)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 0.0000556051)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 2.1101265823)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 1.4883928571)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="3st cosmos"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 32403.887689)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }




            else if(inputTypeValue=="Knot"  &&  resultTypeValue=="Meters/second" ) {

                answer=(Number (input.value) * 0.5144444444)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="Kilometers/hour" ) {
            
                answer=(Number (input.value) * 1.852)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="Miles/hour" ) {
            
                answer=(Number (input.value) * 1.150779448)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="Meters/hour" ) {
            
                answer=(Number (input.value) * 1852)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="Meters/minute" ) {
            
                answer=(Number (input.value) * 30.866666667)
                result.value=pointer(answer)
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="Kilometers/minute" ) {
            
                answer=(Number (input.value) * 0.0308666667)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="Kilometers/second" ) {
            
                answer=(Number (input.value) * 0.0005144444)
                accuracy=getlength(input.value)
                cute_answer_short(answer,accuracy)
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="foot/hour" ) {
            
                answer=(Number (input.value) * 6076.1154856)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="foot/minute" ) {
            
                answer=(Number (input.value) * 101.26859143)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="Foot/second" ) {
            
                answer=(Number (input.value) * 1.6878098571)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="mile/minute" ) {
            
                answer=(Number (input.value) * 0.0191796575)
                accuracy=getlength(input.value)
                cute_answer(answer,accuracy )
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="mile/second" ) {
            
                answer=(Number (input.value) * 0.000319661)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="light" ) {
            
                answer=(Number (input.value) * 1.716001956E-9)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="1st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000651195)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="2st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000459325)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="3st cosmos" ) {
            
                answer=(Number (input.value) * 0.0000308605)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }else if (inputTypeValue=="Knot"  &&  resultTypeValue=="Knot" ) {
            
                answer=(Number (input.value) * 1)
                accuracy=getlength(input.value)
                cute_answer_short(answer,6 )
            
            }

        }
  





        
  } 
