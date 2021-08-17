from flask import Flask,  app, render_template, request


import math


app = Flask (__name__)


facebook="https://www.facebook.com/DiscitePhysicam"
web_app="Discite Physicam"





#უპოვნელ გვერდე გამოაქ 404 დაკარგული ნიშანი
@app.errorhandler(404)
def not_found_page(e):
    return render_template ('404.html'), 404


@app.route('/')
def fist_page():
    return render_template ('first.html')


@app.route('/calculator')
def calculator():
    return render_template ('choose.html' )


@app.route('/calculator/mechanic')
def mechanic():
    return render_template ('/mechanic/mechanic.html')


@app.route('/calculator/mechanic/kinematika')
def kinematika():
    return render_template ('/mechanic/kinematika/kinematika.html')


@app.route('/calculator/mechanic/kinematika/fallen')
def fallen():
    return render_template ('/mechanic/kinematika/fallen/fallen.html')


@app.route('/calculator/mechanic/kinematika/gasrolili')
def gasrolili():
    return render_template ('/mechanic/kinematika/gasrolili/gasrolili.html')


@app.route('/calculator/mechanic/kinematika/asrolili')
def asrolili():
    return render_template ('/mechanic/kinematika/asrolili/asrolili.html')






###################################################### ვარდნილი სხეული დასაწყისი ######################################################
###################################################### ვარდნილი სხეული დასაწყისი ######################################################
###################################################### ვარდნილი სხეული დასაწყისი ######################################################
###################################################### ვარდნილი სხეული დასაწყისი ######################################################



#----------------------------------------------------------ითვლის დაცემის დრო ----------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/time/calculate')
def time_calculate_fallen():
    return render_template ('/mechanic/kinematika/fallen/time_calculate.html')


@app.route('/calculator/mechanic/kinematika/fallen/time/' ,  methods=['GET','POST'])
def get_value_time_fallen():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    selectable=float(request.form['selectable'])
    choose=request.form['select']


    if choose=='სიმაღლე' and gravity>0 and selectable>=0 and velocity>=0:
        time=(math.sqrt((velocity**2)+2*gravity*selectable)-velocity)/gravity
        time=round(time,2)
        return render_template ('/mechanic/kinematika/fallen/time_calculate.html' , time=time ,Dimension='წმ')

    elif choose=='მყისი სიჩქარე' and gravity>0 and velocity<=selectable and velocity>=0 :
        time=(selectable-velocity)/gravity
        time=round(time,2)
        return render_template ('/mechanic/kinematika/fallen/time_calculate.html' , time=time, Dimension='წმ' )

    else:
        return render_template ('/mechanic/kinematika/fallen/time_calculate.html' , time='მოცემული მოძრაობა შეუძლებელია' )











#----------------------------------------------------------ითვლის მომენტალურ სიჩქარეს----------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/instant_velocity/calculate')
def fallen_inst_velocity():
    return render_template ('/mechanic/kinematika/fallen/instant_velocity.html')


@app.route('/calculator/mechanic/kinematika/fallen/instant_velocity/' ,  methods=['GET','POST'])
def get_value_fallem_inst_velocity():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    selectable=float(request.form['selectable'])
    choose=request.form['select']

    if choose=='ვარდნის დრო' and gravity>0 and velocity>=0:
        instant_velocity=velocity+gravity*selectable
        instant_velocity=round(instant_velocity,2)

        return render_template ('/mechanic/kinematika/fallen/instant_velocity.html' , velocity=instant_velocity ,Dimension='მ/წმ')

    elif choose=='სიმაღლე' and gravity>0 and selectable>=0 and velocity>=0:
        instant_velocity=math.sqrt((2*gravity*selectable)+velocity**2)
        instant_velocity=round(instant_velocity,2)

        return render_template ('/mechanic/kinematika/fallen/instant_velocity.html' ,  velocity=instant_velocity ,Dimension='მ/წმ')
    else:
        return render_template ('/mechanic/kinematika/fallen/instant_velocity.html' , velocity='მოცემული მოძრაობა შეუძლებელია' )











#----------------------------------------------------------ითვლის ვარდნის სიმაღლეს----------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/height/calculate')
def fallen_height():
    return render_template ('/mechanic/kinematika/fallen/height.html')


@app.route('/calculator/mechanic/kinematika/fallen/height/' ,  methods=['GET','POST'])
def get_value_fallem_fallen_height():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    selectable=float(request.form['selectable'])
    choose=request.form['select']
    

    if choose=='ვარდნის დრო' and gravity>0 and velocity>=0:
        height=(velocity*selectable)+(gravity*selectable**2)/2
        height=round(height,2)
        return render_template ('/mechanic/kinematika/fallen/height.html' , height=height ,Dimension='მ')

    elif choose=='მყისი სიჩქარე' and gravity>0 and velocity>=0:
        height=((selectable**2)-velocity**2)/(2*gravity)
        height=round(height,2)
        return render_template ('/mechanic/kinematika/fallen/height.html' , height=height ,Dimension='მ')

    else:
        return render_template ('/mechanic/kinematika/fallen/height.html' , height='მოცემული მოძრაობა შეუძლებელია' )












#----------------------------------------------------------ითვლის საწყის სიჩქარეს----------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/initial_velocity/calculate')
def fallen_velocity_0():
    return render_template('/mechanic/kinematika/fallen/initial_velocity.html')


@app.route('/calculator/mechanic/kinematika/fallen/initial_velocity/' ,  methods=['GET','POST'])
def get_value_fallem_velocity_0():
    gravity=float(request.form['gravity'])
    height=float(request.form['selectable'])
    user_choose=float(request.form['selectable2'])
    choose2=request.form['select_second']
    choose=request.form['select']


    if choose=="ვარდნის დრო" and choose2=="სიმაღლე" and gravity>0 and user_choose>0:
        velocity_0= (2*height-gravity*user_choose**2)/(2*user_choose)
        velocity_0=round(velocity_0,2)
        if velocity_0>=0:
            return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity=velocity_0 ,Dimension='მ/წმ')
        else:
            return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity='სხეული თავდაპირველად ზევით მოძრაობს')

    elif choose=="საბოლოო სიჩქარე"and choose2=="სიმაღლე" and gravity>0 and user_choose>0 and (user_choose**2)>=2*gravity*height:
        velocity_0=math.sqrt((user_choose**2)-2*gravity*height)
        velocity_0=round(velocity_0,2)
        return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity=velocity_0 ,Dimension='მ/წმ')

    elif choose=="ვარდნის დრო"and choose2=="საბოლოო სიჩქარე" and gravity>0 and user_choose>0:
        velocity_0=height-gravity*user_choose
        velocity_0=round(velocity_0,2)
        if velocity_0>=0:
            return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity=velocity_0 ,Dimension='მ/წმ')
        else:
            return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity='სხეული თავდაპირველად ზევით მოძრაობს')

    else:
        return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity='მოცემული მოძრაობა შეუძლებელია')










#-------------------------------------------------------ითვლის მე-n წამში გავლილი მანძილს--------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/in_n_time_dist/calculate')
def fallen_in_n_time_dist():
    return render_template ('/mechanic/kinematika/fallen/in_n_time_dist.html')


@app.route('/calculator/mechanic/kinematika/fallen/in_n_time_dist/' ,  methods=['GET','POST'])
def get_value_in_n_time_dist():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    last_n=float(request.form['n_time'])

  
    if gravity>0 and last_n>0:
        height=velocity + ((2*last_n)-1)*gravity/2
        height= round(height , 2)
        return render_template ('/mechanic/kinematika/fallen/in_n_time_dist.html' , distance=height ,Dimension='მ')

    elif last_n<=0 or gravity==0 :
        return render_template ('/mechanic/kinematika/fallen/in_n_time_dist.html' , distance="შეუძლებელია")










#-------------------------------------------------------ითვლის მე-n მეტრის გავლილის დროს--------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/in_n_meter_time/calculate')
def fallen_in_n_metre_time():
    return render_template ('/mechanic/kinematika/fallen/in_n_meter_time.html')


@app.route('/calculator/mechanic/kinematika/fallen/in_n_meter_time/' ,  methods=['GET','POST'])
def get_value_in_n_metre_time():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    last_n=float(request.form['n_time'])

  
    if last_n>0:
        time= (math.sqrt(2 * gravity * (last_n) + velocity**2) - math.sqrt(2 * gravity * (last_n-1) + velocity**2))/gravity
        time= round(time , 5)
        return render_template ('/mechanic/kinematika/fallen/in_n_meter_time.html' , time=time ,Dimension='წმ')
    else:
        return render_template ('/mechanic/kinematika/fallen/in_n_meter_time.html' , time="შეუძლებელია" )










#------------------------------------------------------ითვლის ბოლო n-მეტრის გავლის დროს------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/last_n_meter_time/calculate')
def fallen_last_n_metre_time():
    return render_template('/mechanic/kinematika/fallen/last_n_meter_time.html')


@app.route('/calculator/mechanic/kinematika/fallen/last_n_meter_time/' ,  methods=['GET','POST'])
def get_value_last_n_metre_time():
    gravity=float(request.form['gravity'])
    height=float(request.form['height'])
    velocity=float(request.form['initial_speed'])
    last_n=float(request.form['n_meter'])
  

    if height>=last_n:
        time=( math.sqrt((2*gravity*height) + velocity**2) - math.sqrt(2*gravity*(height-last_n)+velocity**2) )/gravity
        time= round(time , 2)
        return render_template ('/mechanic/kinematika/fallen/last_n_meter_time.html' , time=time ,Dimension='წმ')
    else:
        return render_template ('/mechanic/kinematika/fallen/last_n_meter_time.html' , time="შეუძლებელია")











#------------------------------------------------------ითვლის ბოლო n-წამში გავლილი მანძილს------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/last_n_time_dist/calculate')
def fallen_last_n_time_dist():
    return render_template ('/mechanic/kinematika/fallen/last_n_time_dist.html')


@app.route('/calculator/mechanic/kinematika/fallen/last_n_time_dist/' ,  methods=['GET','POST'])
def get_value_last_n_time_dist():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    last_n=float(request.form['n_time'])
    time=float(request.form['time'])
  
    if time>=last_n :
        height=(velocity*last_n) + (gravity*last_n*((2*time) - last_n))/2
        height= round(height , 2)
        return render_template ('/mechanic/kinematika/fallen/last_n_time_dist.html' ,height=height ,Dimension='მ')
    else:
        return render_template ('/mechanic/kinematika/fallen/last_n_time_dist.html' , height="მოძრაობა შეუძლებელია" )






###################################################### გასროლილი სხეული დასაწყისი ######################################################
###################################################### გასროლილი სხეული დასაწყისი ######################################################
###################################################### გასროლილი სხეული დასაწყისი ######################################################
###################################################### გასროლილი სხეული დასაწყისი ######################################################



#გასროლილი სხეულისთვის ითვლის                     ვარდნის სიშორეს
@app.route('/calculator/mechanic/kinematika/gasrolili/distance/calculate')
def gasrolili_distance():
    return render_template('/mechanic/kinematika/gasrolili/dist.html')


@app.route('/calculator/mechanic/kinematika/gasrolili/distance/', methods=['GET','POST'])
def gasrolili_distance_calc():
    gravity=float(request.form['gravity'])
    angle_user=float(request.form['angle'])
    velocity=float(request.form['initial_speed'])

    
    angle=math.radians(angle_user)

    if gravity>0 and angle_user<=90 and velocity>0:

        distance=round((2*velocity**2*math.sin(angle)*math.cos(angle)/gravity),2)

        return render_template('/mechanic/kinematika/gasrolili/dist.html', distance=distance , Dimension="მ" ,)
    else:
        
        return render_template('/mechanic/kinematika/gasrolili/dist.html', distance="შეუძლებელია" ,)









#გასროლილი სხეულისთვის ითვლის                ასვლის მაქსიმალურ სიმაღლეს
@app.route('/calculator/mechanic/kinematika/gasrolili/height/calculate')
def height():
    return render_template('/mechanic/kinematika/gasrolili/height.html')


@app.route('/calculator/mechanic/kinematika/gasrolili/height/', methods=['GET','POST'])
def getvalue_height():

    
    gravity=float(request.form['gravity'])
    angle_user=float(request.form['angle'])
    velocity=float(request.form['selectable'])
    choose=request.form['select']

    angle=math.radians(angle_user)
    
    if choose == "საწყისი სიჩქარე" and gravity>0 and angle_user<=90 and velocity>0:
        
        max_haight=round( (((velocity**2)/(2*gravity))*((math.sin(angle))**2)),2)
        return render_template('/mechanic/kinematika/gasrolili/height.html', height=max_haight, Dimension="მ")
    elif choose == "ფრენის მანძილი" and gravity>0 and angle_user<=90 and velocity>0:
        velocity_k=math.sqrt((velocity*gravity)/math.sin(2*angle))
        max_haight=round((((velocity_k**2)/(2*gravity))*((math.sin(angle))**2)),2)
        return render_template('/mechanic/kinematika/gasrolili/height.html', height=max_haight, Dimension="მ" )
    else:
       
        return render_template('/mechanic/kinematika/gasrolili/height.html', height="შეუძლებელია" )










#გასროლილი სხეულისთვის ითვლის                    ფრენის სრულ დროს
@app.route('/calculator/mechanic/kinematika/gasrolili/time/calculate')
def time():
    return render_template('/mechanic/kinematika/gasrolili/time.html')


@app.route('/calculator/mechanic/kinematika/gasrolili/time/', methods=['GET','POST'])
def getvalue_time():
    gravity=float(request.form['gravity'])
    angle_user=float(request.form['angle'])
    velocity=float(request.form['selectable'])
    choose=request.form['select']
   
    angle=math.radians(angle_user)

    if choose == "საწყისი სიჩქარე" and gravity>0 and angle_user<=90 and velocity>0:
        
        time=round((((2*velocity)/gravity)*math.sin(angle)),2)
        return render_template('/mechanic/kinematika/gasrolili/time.html', time=time, Dimension="წმ" )
    elif choose == "ფრენის მანძილი" and gravity>0 and angle_user<=90 and velocity>0:

        velocity_k=math.sqrt((velocity*gravity)/math.sin(2*angle))
        time=round((((2*velocity_k)/gravity)*math.sin(angle)),2)
        return render_template('/mechanic/kinematika/gasrolili/time.html', time=time, Dimension="წმ" )
    else:
        
        return render_template('/mechanic/kinematika/gasrolili/time.html', time="შეუძლებელია" )









#გასროლილი სხეულისთვის ითვლის               საწყის სიჩქარეს
@app.route('/calculator/mechanic/kinematika/gasrolili/initaial_velocity/calculate')
def velocity():
    return render_template('/mechanic/kinematika/gasrolili/initaial_velocity.html')

@app.route('/calculator/mechanic/kinematika/gasrolili/initaial_velocity/', methods=['GET','POST'])
def getvalue_velocity():
    gravity=float(request.form['gravity'])
    angle_user=float(request.form['angle'])
    user_choose_variable=float(request.form['selectable'])
    choose=request.form['select']
    
    angle=math.radians(angle_user)

    if choose == "ფრენის დრო" and gravity>0 and angle_user<=90 and user_choose_variable>0:
        
        velocity_real=round((user_choose_variable*gravity/(2*math.sin(angle))),2)
        return render_template('/mechanic/kinematika/gasrolili/initaial_velocity.html', velocity=velocity_real, Dimension="მ/წმ" )

    elif choose == "ფრენის მანძილი" and gravity>0 and angle_user<=90 and user_choose_variable>0:
        velocity_real=round((math.sqrt((user_choose_variable*gravity)/(2*math.sin(angle)*math.cos(angle)))),2)
        return render_template('/mechanic/kinematika/gasrolili/initaial_velocity.html', velocity=velocity_real , Dimension="მ/წმ")

    elif choose == "ასვლის სიმაღლე" and gravity>0 and angle_user<=90 and user_choose_variable>0:
        velocity_real=round((math.sqrt((2*gravity*user_choose_variable)/(math.sin(angle)**2))),2)
        return render_template('/mechanic/kinematika/gasrolili/initaial_velocity.html', velocity=velocity_real , Dimension="მ/წმ")

    else:
    
        return render_template('/mechanic/kinematika/gasrolili/initaial_velocity.html', velocity="შეუძლებელია" )









#გასროლილი სხეულისთვის ითვლის              კუთხეს
@app.route('/calculator/mechanic/kinematika/gasrolili/angle/calculate')
def angle():
    return render_template('/mechanic/kinematika/gasrolili/angle.html')


@app.route('/calculator/mechanic/kinematika/gasrolili/angle/', methods=['GET','POST'])
def getvalue_angle():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initaial_velocity'])
    user_choose_variable=float(request.form['selectable'])
    choose=request.form['select']
    
    if choose=="ფრენის დრო" and gravity>0 and velocity>0 and gravity*user_choose_variable/(2*velocity)<=1 and user_choose_variable>0:  #ამოწმებს არკსინუსის მნიშვნელობას
        
        angle= math.asin((user_choose_variable*gravity)/(2*velocity))
        angle_degrees=round((math.degrees(angle)),2)
        return render_template('/mechanic/kinematika/gasrolili/angle.html', angle=angle_degrees, Dimension="°" )
    
    elif choose=="ასვლის სიმაღლე" and gravity>0 and velocity>0 and (user_choose_variable*2*gravity/(velocity**2))<=1 and user_choose_variable>0 :  #ამოწმებს არკსინუსის მნიშვნელობას
        
        angle= math.asin(math.sqrt(user_choose_variable*2*gravity/(velocity**2)))
        angle_degrees=round((math.degrees(angle)),2)
        return render_template('/mechanic/kinematika/gasrolili/angle.html', angle=angle_degrees, Dimension="°" )
    
    elif choose=="ფრენის მანძილი" and gravity>0 and velocity>0 and (user_choose_variable*gravity/(velocity**2))<=1 and user_choose_variable>0:  #ამოწმებს არკსინუსის მნიშვნელობას
        
        angle= math.asin((user_choose_variable*gravity/(velocity**2))) 
        angle_degrees=round((math.degrees(angle)),2)
        if user_choose_variable==0:
            return render_template('/mechanic/kinematika/gasrolili/angle.html' , angle=90 , Dimension="°" )
        
        return render_template('/mechanic/kinematika/gasrolili/angle.html', angle=angle_degrees/2, Dimension="°" )
    

    elif choose=="სიჩაქრე x-ღერძე" and gravity>0 and velocity>0 and user_choose_variable<=velocity and user_choose_variable>=0 and user_choose_variable>0: #ამოწმებს არკკოსინუსის მნიშვნელობას
        
        angle=math.acos(user_choose_variable/velocity)
        angle_degrees=round((math.degrees(angle)),2)
        return render_template('/mechanic/kinematika/gasrolili/angle.html', angle=angle_degrees, Dimension="°" )
    
    else:
        return render_template('/mechanic/kinematika/gasrolili/angle.html', angle="შეუძლებელია" )










#გასროლილი სხეულისთვის ითვლის              მომენტალურ სიჩქარეს
@app.route('/calculator/mechanic/kinematika/gasrolili/instant_velocity/calculate')
def inst_velocity():
    return render_template('/mechanic/kinematika/gasrolili/instant_velocity.html')

@app.route('/calculator/mechanic/kinematika/gasrolili/instant_velocity/', methods=['GET','POST'])
def get_value_inst_velocity():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initaial_velocity'])
    time=float(request.form['n_time'])
    angle_user=float(request.form['angle'])

    angle=math.radians(angle_user)
    velocity_Y=velocity* math.sin(angle)

    if gravity>0 and velocity>0 and time>0 and angle_user<=90 and time<=0.000001+(2*velocity_Y/gravity):
        # Y laber
        instant_velocity=velocity_Y-gravity*time
        #Real_velocity_Y=round((math.sqrt(instant_velocity**2)),2)
        Real_velocity_Y=round(instant_velocity,2)
        # X laber
        velocity_X=round((velocity* math.cos(angle)),2)

        # for man
        Real_velocity_man= round((math.sqrt((Real_velocity_Y**2)+velocity_X**2)),2)

        return render_template('/mechanic/kinematika/gasrolili/instant_velocity.html' , RY=Real_velocity_Y , RX=velocity_X, RR=Real_velocity_man, Dimension="მ/წმ" )
    else:
        return render_template('/mechanic/kinematika/gasrolili/instant_velocity.html' , RY="ასეთი მოძრაობა შეუძლებელია" , RX="ასეთი მოძრაობა შეუძლებელია", RR="ასეთი მოძრაობა შეუძლებელია")











#გასროლილი სხეულისთვის ითვლის              position X Y
@app.route('/calculator/mechanic/kinematika/gasrolili/instant_positon/calculate')
def position_x_y():
    return render_template('/mechanic/kinematika/gasrolili/instant_positon.html')


@app.route('/calculator/mechanic/kinematika/gasrolili/instant_positon/', methods=['GET','POST'])
def get_value_position_x_y():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initaial_velocity'])
    momentum=float(request.form['time'])
    angle_user=float(request.form['angle'])

    angle=math.radians(angle_user)
    #გამოვთვალოთ პრენის სრული დრო
    time=round((((2*velocity)/gravity)*math.sin(angle)),2)

    if gravity>0 and velocity>0 and angle_user<=90 and momentum<(time/2) and momentum>0:
        velocity_Y=velocity*math.sin(angle)

        position_Y=round(( (velocity_Y * momentum) - ((gravity*momentum**2)/2)),2)
        position_X=round((momentum*velocity*math.cos(angle)),2)

        return render_template('/mechanic/kinematika/gasrolili/instant_positon.html' ,X=position_X , Y=position_Y , Dimension="მ" )
    elif gravity>0 and velocity>0 and angle_user<=90 and momentum>(time/2) and momentum<=(time):
        max_haight=((velocity**2)/(2*gravity))*((math.sin(angle))**2)
        time_need= momentum-(time/2)
        position_Y_top=(gravity*time_need**2)/2

        position_Y=round((max_haight-position_Y_top),2)
        position_X= round((momentum*velocity*math.cos(angle)),2)

        return render_template('/mechanic/kinematika/gasrolili/instant_positon.html' ,X=position_X , Y=position_Y , Dimension="მ" )
    elif gravity>0 and velocity>0 and angle_user<=90 and momentum==(time/2):
        max_haight=((velocity**2)/(2*gravity))*((math.sin(angle))**2)
       
        position_Y=round((max_haight),2)
        position_X= round((momentum*velocity*math.cos(angle)),2)

        return render_template('/mechanic/kinematika/gasrolili/instant_positon.html' ,X=position_X , Y=position_Y , Dimension="მ" )
    else:
        return render_template('/mechanic/kinematika/gasrolili/instant_positon.html' ,X="მოცემული მოძრაობა შეუძლებელია" , Y="მოცემული მოძრაობა შეუძლებელია")








###################################################### ასროლილი სხეული დასაწყისი ######################################################
###################################################### ასროლილი სხეული დასაწყისი ######################################################
###################################################### ასროლილი სხეული დასაწყისი ######################################################
###################################################### ასროლილი სხეული დასაწყისი ######################################################

















if __name__ == '__main__':
    app.run (debug=True)