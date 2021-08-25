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


@app.route('/calculator/mechanic/kinematika/height_gasrolili')
def height_gasrolili():
    return render_template ('/mechanic/kinematika/height_gasrolili/height_gasrolili.html')





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
        time=round(time,4)
        return render_template ('/mechanic/kinematika/fallen/time_calculate.html' , time=time ,Dimension='წმ')

    elif choose=='მყისი სიჩქარე' and gravity>0 and velocity<=selectable and velocity>=0 :
        time=(selectable-velocity)/gravity
        time=round(time,4)
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
        height= round(height , 1)
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

    if gravity>0 and angle<=1.5708 and velocity>0:

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
    
    if choose == "საწყისი სიჩქარე" and gravity>0 and angle<=1.5708 and velocity>0:
        
        max_haight=round( (((velocity**2)/(2*gravity))*((math.sin(angle))**2)),2)
        return render_template('/mechanic/kinematika/gasrolili/height.html', height=max_haight, Dimension="მ")
    elif choose == "ფრენის მანძილი" and gravity>0 and angle<=1.5708 and velocity>0:
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

    if choose == "საწყისი სიჩქარე" and gravity>0 and angle<=1.5708 and velocity>0:
        
        time=round((((2*velocity)/gravity)*math.sin(angle)),2)
        return render_template('/mechanic/kinematika/gasrolili/time.html', time=time, Dimension="წმ" )
    elif choose == "ფრენის მანძილი" and gravity>0 and angle<=1.5708 and velocity>0:

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

    if choose == "ფრენის დრო" and gravity>0 and angle<=1.5708 and user_choose_variable>0:
        
        velocity_real=round((user_choose_variable*gravity/(2*math.sin(angle))),2)
        return render_template('/mechanic/kinematika/gasrolili/initaial_velocity.html', velocity=velocity_real, Dimension="მ/წმ" )

    elif choose == "ფრენის მანძილი" and gravity>0 and angle<=1.5708 and user_choose_variable>0:
        velocity_real=round((math.sqrt((user_choose_variable*gravity)/(2*math.sin(angle)*math.cos(angle)))),2)
        return render_template('/mechanic/kinematika/gasrolili/initaial_velocity.html', velocity=velocity_real , Dimension="მ/წმ")

    elif choose == "ასვლის სიმაღლე" and gravity>0 and angle<=1.5708 and user_choose_variable>0:
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

    if gravity>0 and velocity>0 and time>0 and angle<=1.5708 and time<=0.000001+(2*velocity_Y/gravity):
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

    if gravity>0 and velocity>0 and angle<=1.5708 and momentum<(time/2) and momentum>0:
        velocity_Y=velocity*math.sin(angle)

        position_Y=round(( (velocity_Y * momentum) - ((gravity*momentum**2)/2)),2)
        position_X=round((momentum*velocity*math.cos(angle)),2)

        return render_template('/mechanic/kinematika/gasrolili/instant_positon.html' ,X=position_X , Y=position_Y , Dimension="მ" )
    elif gravity>0 and velocity>0 and angle<=1.5708 and momentum>(time/2) and momentum<=(time):
        max_haight=((velocity**2)/(2*gravity))*((math.sin(angle))**2)
        time_need= momentum-(time/2)
        position_Y_top=(gravity*time_need**2)/2

        position_Y=round((max_haight-position_Y_top),2)
        position_X= round((momentum*velocity*math.cos(angle)),2)

        return render_template('/mechanic/kinematika/gasrolili/instant_positon.html' ,X=position_X , Y=position_Y , Dimension="მ" )
    elif gravity>0 and velocity>0 and angle<=1.5708 and momentum==(time/2):
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


# ითვლის ასროლილი სხეულისთვსი ფრენის სრულ დროს
@app.route('/calculator/mechanic/kinematika/asrolili/time/calculate')
def asrolili_time():
    return render_template('/mechanic/kinematika/asrolili/time.html')


@app.route('/calculator/mechanic/kinematika/asrolili/time/', methods=['GET','POST'])
def asrolili_time_calculate():
    gravity=float(request.form['gravity'])
    height=float(request.form['height'])
    selectable=float(request.form['initaial_velocity'])
    select=request.form['select']
    

    if select=="საწყისი სიჩქარე":
        time1=(selectable + math.sqrt(2*gravity*height + selectable**2))/gravity

        time=round(time1,3)

        return render_template('/mechanic/kinematika/asrolili/time.html', time=time , Dimension="წმ")

    elif select=="მასიმალური სიმაღლე":
        
        """ selectable= selectable - height """
        time1= math.sqrt(2*(selectable+height)/gravity) + math.sqrt(2*selectable/gravity)
        time=round(time1,3)


        return render_template('/mechanic/kinematika/asrolili/time.html', time=time , Dimension="წმ")







# ითვლის ასროლილი სხეულისთვსი მყის სიჩქარეს
@app.route('/calculator/mechanic/kinematika/asrolili/instant_velocity/calculate')
def asrolili_instant_velocity():
    return render_template('/mechanic/kinematika/asrolili/instant_velocity.html')


@app.route('/calculator/mechanic/kinematika/asrolili/instant_velocity/', methods=['GET','POST'])
def asrolili_instant_velocity_calculate():
    gravity=float(request.form['gravity'])
    height=float(request.form['height'])
    initaial_velocity=float(request.form['initaial_velocity'])
    time=float(request.form['time'])

    time_bc=initaial_velocity/gravity
    time_full=(initaial_velocity + math.sqrt(2*gravity*height + initaial_velocity**2))/gravity

    if time<=time_bc:

        instant_velocity_1= initaial_velocity - (gravity*time)
        instant_velocity=round(instant_velocity_1 , 3)

        return render_template('/mechanic/kinematika/asrolili/instant_velocity.html', instant_velocity=instant_velocity , Dimension="მ/წმ" )   

    elif time>time_bc and time_full>=time :

        time_ca=time-time_bc

        instant_velocity_1=gravity*time_ca
        instant_velocity=round(instant_velocity_1 , 3)

        return render_template('/mechanic/kinematika/asrolili/instant_velocity.html', instant_velocity=instant_velocity , Dimension="მ/წმ" )  


    else:
         return render_template('/mechanic/kinematika/asrolili/instant_velocity.html', instant_velocity="მოცემული მოძრაობა შეუძლებელია" )







# ითვლის ასროლილი სხეულისთვსი საწყის სმაღლეს
@app.route('/calculator/mechanic/kinematika/asrolili/initial_height/calculate')
def asrolili_initial_height():
    return render_template('/mechanic/kinematika/asrolili/initial_height.html')


@app.route('/calculator/mechanic/kinematika/asrolili/initial_height/', methods=['GET','POST'])
def asrolili_initial_height_calc():
        gravity=float(request.form['gravity'])
        initaial_velocity=float(request.form['initaial_velocity'])
        time=float(request.form['time'])

        if (gravity * time**2)>=(2 * time * initaial_velocity):

            initial_height= ((gravity * time**2) - (2 * time * initaial_velocity))/2

            initial_height= round(initial_height , 3)

            return render_template('/mechanic/kinematika/asrolili/initial_height.html', initial_height=initial_height, Dimension="მ")

        else:
            return render_template('/mechanic/kinematika/asrolili/initial_height.html', initial_height="მოძრაობა შეუძლებელია")








# ითვლის ასროლილი სხეულისთვსი საწყის სიჩქარეს
@app.route('/calculator/mechanic/kinematika/asrolili/initial_velocity/calculate')
def asrolili_initial_velocity():
    return render_template('/mechanic/kinematika/asrolili/initial_velocity.html')


@app.route('/calculator/mechanic/kinematika/asrolili/initial_velocity/', methods=['GET','POST'])
def asrolili_initial_velocity_calc():
        gravity=float(request.form['gravity'])
        initaial_height=float(request.form['initaial_height'])
        selectable=float(request.form['selectable'])
        select= request.form['select']




        if select=="სრული დრო" and selectable>0 and ((gravity * selectable**2) - 2 * initaial_height) >0 :

            initial_velocity=((gravity * selectable**2) - 2 * initaial_height) / (2*selectable)
            initial_velocity=round(initial_velocity , 3)

            return render_template('/mechanic/kinematika/asrolili/initial_velocity.html', initial_velocity=initial_velocity, Dimension="მ/წმ")

        if select=="ასვლის სიმაღლე" and (selectable - initaial_height) >0:
       
            initial_velocity=math.sqrt(2*gravity*(selectable - initaial_height))
            initial_velocity=round(initial_velocity , 3)


            return render_template('/mechanic/kinematika/asrolili/initial_velocity.html', initial_velocity=initial_velocity, Dimension="მ/წმ")
        else:
            return render_template('/mechanic/kinematika/asrolili/initial_velocity.html', initial_velocity="მოძრაობა შეუძლებელია")









# ითვლის ასროლილი სხეულისთვსი ასვლის სიმაღლეს
@app.route('/calculator/mechanic/kinematika/asrolili/height/calculate')
def asrolili_height():
    return render_template('/mechanic/kinematika/asrolili/height.html')


@app.route('/calculator/mechanic/kinematika/asrolili/height/', methods=['GET','POST'])
def asrolili_height_calc():
        gravity=float(request.form['gravity'])
        initaial_height=float(request.form['initaial_height'])
        selectable=float(request.form['selectable'])
        select= request.form['select']


        if select=="საწყისი სიჩქარე" :
          
            height= (selectable**2)/(2*gravity)
            height_e=height+initaial_height

            height=round(height , 3)
            height_e=round(height_e , 3)


            return render_template('/mechanic/kinematika/asrolili/height.html',height_e=height_e, height=height, Dimension="მ"  )

        elif select=="ფრენის დრო" and (((gravity*selectable**2)- 2*initaial_height)**2)>0:

            height=(((gravity*selectable**2)- 2*initaial_height)**2) / (8 * gravity * selectable**2)
            height_e=height+initaial_height

            height=round(height , 3)
            height_e=round(height_e , 3)

            return render_template('/mechanic/kinematika/asrolili/height.html',height_e=height_e, height=height, Dimension="მ"  )

        else:
            return render_template('/mechanic/kinematika/asrolili/initial_velocity.html', height_e="მოძრაობა შეუძლებელია", height="მოძრაობა შეუძლებელია")







# ითვლის ასროლილი სხეულისთვსი გადაადგილებას
@app.route('/calculator/mechanic/kinematika/asrolili/displacement/calculate')
def asrolili_displacement():
    return render_template('/mechanic/kinematika/asrolili/displacement.html')


@app.route('/calculator/mechanic/kinematika/asrolili/displacement/', methods=['GET','POST'])
def asrolili_displacement_calc():
        gravity=float(request.form['gravity'])
        initaial_height=float(request.form['initaial_height'])
        initaial_velocity=float(request.form['initaial_velocity'])
        time=float(request.form['time'])


        Time_bc= initaial_velocity/ (gravity)
        Time_ac= (2*gravity*initaial_height + initaial_velocity**2)/ gravity
        
        time_full=(initaial_velocity + math.sqrt(2*gravity*initaial_height + initaial_velocity**2))/gravity
        
        if Time_bc>=time :
           
            displacement= (initaial_velocity*time) - ((gravity*time**2)/2)
            
            displacement=round(displacement,1)

            return render_template('/mechanic/kinematika/asrolili/displacement.html', displacement=displacement, Dimension="მ" )



        elif time>Time_bc and time<=time_full :

            time_1= time - Time_bc

            height_up= (initaial_velocity**2) / (2*gravity)
            Height_down=(gravity*time_1**2)/2

            displacement= height_up - Height_down
            displacement=round(displacement,1)

            return render_template('/mechanic/kinematika/asrolili/displacement.html', displacement=displacement, Dimension="მ" )

        else:
             return render_template('/mechanic/kinematika/asrolili/displacement.html', displacement="მოძრაობა შეუძლებელია")









# ითვლის ასროლილი სხეულისთვსი მე-n წამში გავლილ მანძილს
@app.route('/calculator/mechanic/kinematika/asrolili/in_n_time_dis/calculate')
def asrolili_in_n_time_dis():
    return render_template('/mechanic/kinematika/asrolili/in_n_time_dis.html')


@app.route('/calculator/mechanic/kinematika/asrolili/in_n_time_dis/' , methods=['GET','POST'])
def asrolili_in_n_time_dis_calc():
    gravity=float(request.form['gravity'])
    initaial_height=float(request.form['initaial_height'])
    initaial_velocity=float(request.form['initaial_velocity'])
    n_time=float(request.form['n_time'])


    Time_bc= initaial_velocity/ (gravity)
    Time_ac= math.sqrt(2*gravity*initaial_height + initaial_velocity**2)/ gravity
    
    time_full=(initaial_velocity + math.sqrt(2*gravity*initaial_height + initaial_velocity**2))/gravity


    if n_time<Time_bc:

        distance= initaial_velocity - gravity*n_time + gravity/2
        distance= round(distance, 2)

        return render_template('/mechanic/kinematika/asrolili/in_n_time_dis.html', distance=distance, Dimension="მ" )


    elif n_time>Time_bc and n_time<=time_full:

        distance= gravity*n_time - gravity * Time_bc - gravity/2
        distance= round(distance, 2)

        return render_template('/mechanic/kinematika/asrolili/in_n_time_dis.html', distance=distance, Dimension="მ" )

    elif n_time>Time_bc and (n_time-time_full)<1 and (n_time-time_full)>0 :



        distance_1= (gravity*Time_ac**2)/2
        distance_2= (gravity*(math.floor(Time_ac))**2)/2
        distance= distance_1 - distance_2

        distance= round(distance, 2)

        return render_template('/mechanic/kinematika/asrolili/in_n_time_dis.html', distance=distance, Dimension="მ" )

    else :
        return render_template('/mechanic/kinematika/asrolili/in_n_time_dis.html', distance="მოძრაობა შეუძლებელია")








# ითვლის ასროლილი სხეულისთვსი მე-n მეტრის გავლის დროს
@app.route('/calculator/mechanic/kinematika/asrolili/in_n_meter_time/calculate')
def asrolili_in_n_meter_time():
    return render_template('/mechanic/kinematika/asrolili/in_n_meter_time.html')


@app.route('/calculator/mechanic/kinematika/asrolili/in_n_meter_time/' , methods=['GET','POST'])
def asrolili_in_n_meter_time_calc():
    gravity=float(request.form['gravity'])
    initaial_height=float(request.form['initaial_height'])
    initaial_velocity=float(request.form['initaial_velocity'])
    n_meter=float(request.form['n_meter'])


    height_bc= (initaial_velocity**2)/ (2*gravity)


    if n_meter<=(height_bc*2 + initaial_height) and  n_meter<=height_bc:

        time= (math.sqrt((initaial_velocity**2) - 2*gravity*(n_meter-1)) - math.sqrt((initaial_velocity**2) - 2*gravity*n_meter))/gravity

        time= round(time, 5)

        return render_template('/mechanic/kinematika/asrolili/in_n_meter_time.html', time=time , Dimension='წმ' )

    elif n_meter<=(height_bc*2 + initaial_height) and n_meter>height_bc:

        time= math.sqrt(2*(n_meter-height_bc)/gravity) - math.sqrt(2*(n_meter-height_bc-1)/gravity)

        time= round(time, 5)

        return render_template('/mechanic/kinematika/asrolili/in_n_meter_time.html', time=time , Dimension='წმ' )

    else:

        return render_template('/mechanic/kinematika/asrolili/in_n_meter_time.html', time="მოცემული მოძრაობა შეუძლებელია")








# ითვლის ასროლილი სხეულისთვსი ბოლო n-წამში გავლილი მანძილს
@app.route('/calculator/mechanic/kinematika/asrolili/last_n_time_dis/calculate')
def asrolili_last_n_time_dis():
    return render_template('/mechanic/kinematika/asrolili/last_n_time_dis.html')


@app.route('/calculator/mechanic/kinematika/asrolili/last_n_time_dis/' , methods=['GET','POST'])
def asrolili_last_n_time_dis_calc():
    gravity=float(request.form['gravity'])
    initaial_height=float(request.form['initaial_height'])
    initaial_velocity=float(request.form['initaial_velocity'])
    n_time=float(request.form['n_time'])


    time_ac= math.sqrt(2*gravity*initaial_height + initaial_velocity**2) / gravity
    time_full=(initaial_velocity + math.sqrt(2*gravity*initaial_height + initaial_velocity**2))/gravity
    S= (initaial_velocity**2) / (2*gravity)


    if n_time<= time_ac and n_time < time_full:

        distance= gravity * time_ac * n_time  - (gravity*n_time**2)/2

        distance=round(distance , 1)

        return render_template('/mechanic/kinematika/asrolili/last_n_time_dis.html', distance=distance , Dimension="მ")

    if n_time> time_ac and n_time < time_full:

        distance= ((gravity*(n_time - time_ac)**2)/2) + initaial_height + S

        distance=round(distance , 1)

        return render_template('/mechanic/kinematika/asrolili/last_n_time_dis.html', distance=distance , Dimension="მ")

    else:
        return render_template('/mechanic/kinematika/asrolili/last_n_time_dis.html', distance='მოძრაობა შეუძლებელია')








# ითვლის ასროლილი სხეულისთვსი პირველ n-წამში გავლილი მანძილს
@app.route('/calculator/mechanic/kinematika/asrolili/first_n_time_dis/calculate')
def asrolili_first_n_time_dis():
    return render_template('/mechanic/kinematika/asrolili/first_n_time_dis.html')


@app.route('/calculator/mechanic/kinematika/asrolili/first_n_time_dis/' , methods=['GET','POST'])
def asrolili_first_n_time_dis_calc():
    gravity=float(request.form['gravity'])
    initaial_height=float(request.form['initaial_height'])
    initaial_velocity=float(request.form['initaial_velocity'])
    n_time=float(request.form['n_time'])

    time_bc= initaial_velocity / gravity
    time_ac= math.sqrt(2*gravity*initaial_height + initaial_velocity**2) / gravity
    time_full=(initaial_velocity + math.sqrt(2*gravity*initaial_height + initaial_velocity**2))/gravity
    S= (initaial_velocity**2) / (2*gravity)


    if n_time<=time_bc :

        distance= initaial_velocity*n_time - (gravity * n_time**2)/2

        distance= round(distance , 2)

        return render_template('/mechanic/kinematika/asrolili/first_n_time_dis.html', distance=distance , Dimension="მ")

    elif n_time>time_bc and n_time<time_full :

        distance= S + (gravity/2)* (n_time - time_bc)**2

        distance= round(distance , 2)

        return render_template('/mechanic/kinematika/asrolili/first_n_time_dis.html', distance=distance , Dimension="მ")

    else:
        return render_template('/mechanic/kinematika/asrolili/first_n_time_dis.html', distance='მოძრაობა შეუძლებელია')










# ითვლის ასროლილი სხეულისთვსი ბოლო n-მეტის გავლილის დროს
@app.route('/calculator/mechanic/kinematika/asrolili/last_n_meter_time/calculate')
def asrolili_last_n_meter_time():
    return render_template('/mechanic/kinematika/asrolili/last_n_meter_time.html')


@app.route('//calculator/mechanic/kinematika/asrolili/last_n_meter_time/' , methods=['GET','POST'])
def asrolili_last_n_meter_time_calc():
    gravity=float(request.form['gravity'])
    initaial_height=float(request.form['initaial_height'])
    initaial_velocity=float(request.form['initaial_velocity'])
    n_meter=float(request.form['n_meter'])

    time_bc= initaial_velocity / gravity
    time_ac= math.sqrt(2*gravity*initaial_height + initaial_velocity**2) / gravity
    time_full=(initaial_velocity + math.sqrt(2*gravity*initaial_height + initaial_velocity**2))/gravity
    S= (initaial_velocity**2) / (2*gravity)


    if n_meter <= (S+initaial_height ) :

        time= math.sqrt(2*(initaial_height + S)/gravity) - math.sqrt(2*(initaial_height + S -n_meter )/gravity)

        time= round(time , 4)

        return render_template('/mechanic/kinematika/asrolili/last_n_meter_time.html', time=time , Dimension="წმ")

    if n_meter > (S+initaial_height ) and n_meter <= (2*S+initaial_height ):

        time= math.sqrt(2*(initaial_height + S)/gravity) + math.sqrt(2*(n_meter -initaial_height - S )/gravity)

        time= round(time , 4)

        return render_template('/mechanic/kinematika/asrolili/last_n_meter_time.html', time=time , Dimension="წმ")
    else:
        return render_template('/mechanic/kinematika/asrolili/last_n_meter_time.html', time='მოძრაობა შეუძლებელია')






# ითვლის ასროლილი სხეულისთვსი პირველი n-მეტის გავლილის დროს
@app.route('/calculator/mechanic/kinematika/asrolili/first_n_meter_time/calculate')
def asrolili_first_n_meter_time():
    return render_template('/mechanic/kinematika/asrolili/first_n_meter_time.html')


@app.route('//calculator/mechanic/kinematika/asrolili/first_n_meter_time/' , methods=['GET','POST'])
def asrolili_first_n_meter_time_calc():
    gravity=float(request.form['gravity'])
    initaial_height=float(request.form['initaial_height'])
    initaial_velocity=float(request.form['initaial_velocity'])
    n_meter=float(request.form['n_meter'])

    time_bc= initaial_velocity / gravity
    time_full=(initaial_velocity + math.sqrt(2*gravity*initaial_height + initaial_velocity**2))/gravity
    S= (initaial_velocity**2) / (2*gravity)


    if n_meter<=S :

        time= (initaial_velocity - math.sqrt((initaial_velocity**2) - 2*gravity*n_meter))/gravity

        time= round(time , 4)

        return render_template('/mechanic/kinematika/asrolili/first_n_meter_time.html', time=time , Dimension="წმ")

    elif n_meter>S and n_meter<= (2*S + initaial_height):

        meter_1= n_meter - S

        time_ac= math.sqrt(meter_1 * 2 / gravity)

        time = time_ac + time_bc

        time= round(time , 4)

        return render_template('/mechanic/kinematika/asrolili/first_n_meter_time.html', time=time , Dimension="წმ")
    else:
        return render_template('/mechanic/kinematika/asrolili/first_n_meter_time.html', time='მოძრაობა შეუძლებელია')











###############################################სიმაღლდიან გასროლილი სხეული დასაწყისი ######################################################
###############################################სიმაღლდიან გასროლილი სხეული დასაწყისი ######################################################
###############################################სიმაღლდიან გასროლილი სხეული დასაწყისი ######################################################
###############################################სიმაღლდიან გასროლილი სხეული დასაწყისი ######################################################




#სიმაღლდიან გასროლილი სხეულისთვის ითვლის                     ვარდნის სიშორეს
@app.route('/calculator/mechanic/kinematika/height_gasrolili/distance/calculate')
def height_gasrolili_distance():
    return render_template('/mechanic/kinematika/height_gasrolili/dist.html')


@app.route('/calculator/mechanic/kinematika/height_gasrolili/distance/', methods=['GET','POST'])
def height_gasrolili_distance_calc():
    gravity=float(request.form['gravity'])
    angle=float(request.form['angle'])
    velocity=float(request.form['initial_speed'])
    initial_height=float(request.form['initial_height'])

    
    angle=math.radians(angle)

    velocity_Y=velocity*math.sin(angle)
    velocity_X=velocity*math.cos(angle)


    if angle<=1.5708:

        distance=velocity_X*(velocity_Y + math.sqrt(2*initial_height*gravity + velocity_Y**2)) / gravity

        distance=round(distance,2)

        return render_template('/mechanic/kinematika/height_gasrolili/dist.html', distance=distance , Dimension="მ" ,)
    else:
        
        return render_template('/mechanic/kinematika/height_gasrolili/dist.html', distance="შეუძლებელია" ,)







#სიმაღლდიან გასროლილი სხეულისთვის ითვლის                 ასვლის მაქსიმალურ სიმაღლეს
@app.route('/calculator/mechanic/kinematika/height_gasrolili/height/calculate')
def height_gasrolili_height():
    return render_template('/mechanic/kinematika/height_gasrolili/height.html')


@app.route('/calculator/mechanic/kinematika/height_gasrolili/height/', methods=['GET','POST'])
def height_gasrolili_getvalue_height():

    
    gravity=float(request.form['gravity'])
    angle=float(request.form['angle'])
    velocity=float(request.form['initial_speed'])
    initial_height=float(request.form['initial_height'])

    
    angle=math.radians(angle)

    velocity_Y=velocity*math.sin(angle)
    velocity_X=velocity*math.cos(angle)
    
    if angle<=1.5708:

        height1= (velocity_Y**2) / (2 * gravity)
        height= initial_height + height1
        height= round(height, 2)

        return render_template('/mechanic/kinematika/height_gasrolili/height.html', height=height , Dimension="მ" ,)

    else:
       
        return render_template('/mechanic/kinematika/height_gasrolili/height.html', height="შეუძლებელია" )








#სიმაღლდიან გასროლილი სხეულისთვის ითვლის                    ფრენის სრულ დროს
@app.route('/calculator/mechanic/kinematika/height_gasrolili/time/calculate')
def height_gasrolili_time():
    return render_template('/mechanic/kinematika/height_gasrolili/time.html')


@app.route('/calculator/mechanic/kinematika/height_gasrolili/time/', methods=['GET','POST'])
def height_gasrolili_getvalue_time():
    
    gravity=float(request.form['gravity'])
    angle=float(request.form['angle'])
    velocity=float(request.form['initial_speed'])
    initial_height=float(request.form['initial_height'])

    
    angle=math.radians(angle)

    velocity_Y=velocity*math.sin(angle)
    velocity_X=velocity*math.cos(angle)


    if  angle<=1.5708 :
        
        time= (velocity_Y + math.sqrt(2*initial_height*gravity + velocity_Y**2)) / gravity

        time=round(time,3)

        return render_template('/mechanic/kinematika/height_gasrolili/time.html', time=time, Dimension="წმ" )
    
    else:
        
        return render_template('/mechanic/kinematika/height_gasrolili/time.html', time="შეუძლებელია" )







#სიმაღლდიან გასროლილი სხეულისთვის ითვლის                საწყის სიჩქარეს
@app.route('/calculator/mechanic/kinematika/height_gasrolili/initaial_velocity/calculate')
def height_gasrolili_velocity():
    return render_template('/mechanic/kinematika/height_gasrolili/initaial_velocity.html')

@app.route('/calculator/mechanic/kinematika/height_gasrolili/initaial_velocity/', methods=['GET','POST'])
def height_gasrolili_getvalue_velocity():
    gravity=float(request.form['gravity'])
    angle=float(request.form['angle'])
    initial_height=float(request.form['initial_height'])
    selectable=float(request.form['selectable'])
    choose=request.form['select']
    
    angle=math.radians(angle)

 
    if choose == "ფრენის დრო" and angle<=1.5708 :
        
        initial_velocity= ((gravity*selectable**2) - 2 * initial_height) / (2 * selectable * math.sin(angle) )

        initial_velocity=round(initial_velocity,2)

        return render_template('/mechanic/kinematika/height_gasrolili/initaial_velocity.html', initial_velocity=initial_velocity, Dimension="მ/წმ" )

    elif choose == "საბოლოო სიჩქარე" and angle<=1.5708 and  (selectable**2 - 2*initial_height*gravity )>0:

        initial_velocity= math.sqrt (selectable**2 - 2*initial_height*gravity ) 

        initial_velocity=round(initial_velocity,2)

        return render_template('/mechanic/kinematika/height_gasrolili/initaial_velocity.html', initial_velocity=initial_velocity , Dimension="მ/წმ")

    elif choose == "ასვლის სიმაღლე" and angle<=1.5708 and (selectable - initial_height) >0  :

        initial_velocity= (math.sqrt( 2* gravity * (selectable - initial_height))) / math.sin(angle)

        initial_velocity=round(initial_velocity,2)

        return render_template('/mechanic/kinematika/height_gasrolili/initaial_velocity.html', initial_velocity=initial_velocity , Dimension="მ/წმ")

    elif choose == "ფრენის მანძილი" and angle<=1.5708  :

        initial_velocity= math.sqrt((gravity* selectable**2 ) / (2*math.cos(angle)*initial_height*math.cos(angle) +  selectable * math.sin(2*angle)  ) )

        initial_velocity=round(initial_velocity,2)

        return render_template('/mechanic/kinematika/height_gasrolili/initaial_velocity.html', initial_velocity=initial_velocity , Dimension="მ/წმ")
    else:
    
        return render_template('/mechanic/kinematika/height_gasrolili/initaial_velocity.html', initial_velocity="შეუძლებელია" )







#სიმაღლდიან გასროლილი სხეულისთვის ითვლის              კუთხეს
@app.route('/calculator/mechanic/kinematika/height_gasrolili/angle/calculate')
def height_gasrolili_angle():
    return render_template('/mechanic/kinematika/height_gasrolili/angle.html')


@app.route('/calculator/mechanic/kinematika/height_gasrolili/angle/', methods=['GET','POST'])
def height_gasrolili_getvalue_angle2():
    gravity=float(request.form['gravity'])
    initaial_height=float(request.form['initaial_height'])
    selectable=float(request.form['selectable'])
    selectable2=float(request.form['selectable2'])
    choose=request.form['select']
    choose2=request.form['select2']
    

    if choose=="b" and choose2=="ფრენის მანძილი":
        angle=math.atan(((gravity * selectable**2) - 2 * initaial_height) / (2* selectable2) )


        angle=round((math.degrees(angle)),2)
        return render_template('/mechanic/kinematika/height_gasrolili/angle.html', angle=angle, Dimension="°" )



    elif choose=="a" and choose2=="ასვლის სიმაღლე":
        angle=math.asin(math.sqrt(2*(selectable2- initaial_height) * gravity /selectable**2 ))

        angle=round((math.degrees(angle)),2)
        return render_template('/mechanic/kinematika/height_gasrolili/angle.html', angle=angle, Dimension="°" )


    elif choose=="a" and choose2=="ფრენის დრო":
        angle=math.asin( ((gravity * selectable2**2) - 2 * initaial_height) / (2 *selectable * selectable2 ) ) 

        angle=round((math.degrees(angle)),2)
        return render_template('/mechanic/kinematika/height_gasrolili/angle.html', angle=angle, Dimension="°" )

    else:
        return render_template('/mechanic/kinematika/height_gasrolili/angle.html', angle="შეუძლებელია" )









#სიმაღლდიან გასროლილი სხეულისთვის ითვლის               მომენტალურ სიჩქარეს
@app.route('/calculator/mechanic/kinematika/height_gasrolili/instant_velocity/calculate')
def height_gasrolili_inst_velocity():
    return render_template('/mechanic/kinematika/height_gasrolili/instant_velocity.html')

@app.route('/calculator/mechanic/kinematika/height_gasrolili/instant_velocity/', methods=['GET','POST'])
def height_gasrolili_get_value_inst_velocity():
    gravity=float(request.form['gravity'])
    initaial_velocity=float(request.form['initaial_velocity'])
    initial_height=float(request.form['initial_height'])
    time=float(request.form['n_time'])
    angle=float(request.form['angle'])

    angle=math.radians(angle)

    velocity_Y=initaial_velocity * math.sin(angle)
    inst_X=initaial_velocity * math.cos(angle)

    time_bc=velocity_Y/gravity
    time_full=(velocity_Y + math.sqrt(2*initial_height*gravity + velocity_Y**2)) / gravity



    if time<= time_bc :

        inst_Y= initaial_velocity - (gravity*time)
        
        inst_E=math.sqrt(inst_Y**2 + inst_X**2)

        inst_Y=round(inst_Y , 2)
        inst_X=round(inst_X , 2)
        inst_E=round(inst_E , 2)

        return render_template('/mechanic/kinematika/height_gasrolili/instant_velocity.html', inst_Y=inst_Y , inst_X=inst_X, inst_E=inst_E, Dimension="მ/წმ" )   

    elif time>time_bc and time_full >= time :

        time_ca=time-time_bc

        inst_Y= time_ca * gravity

        inst_E=math.sqrt(inst_Y**2 + inst_X**2)

        inst_Y=round(inst_Y , 2)
        inst_X=round(inst_X , 2)
        inst_E=round(inst_E , 2)

        return render_template('/mechanic/kinematika/height_gasrolili/instant_velocity.html', inst_Y=inst_Y , inst_X=inst_X, inst_E=inst_E, Dimension="მ/წმ"  )
    else:
        return render_template('/mechanic/kinematika/height_gasrolili/instant_velocity.html' , inst_Y="ასეთი მოძრაობა შეუძლებელია" , inst_X="ასეთი მოძრაობა შეუძლებელია", inst_E="ასეთი მოძრაობა შეუძლებელია")








#სიმაღლდიან გასროლილი სხეულისთვის ითვლის              position X Y
@app.route('/calculator/mechanic/kinematika/height_gasrolili/instant_positon/calculate')
def height_gasrolili_position_x_y():
    return render_template('/mechanic/kinematika/height_gasrolili/instant_positon.html')


@app.route('/calculator/mechanic/kinematika/height_gasrolili/instant_positon/', methods=['GET','POST'])
def height_gasrolili_get_value_position_x_y():
    gravity=float(request.form['gravity'])
    initaial_velocity=float(request.form['initaial_velocity'])
    initial_height=float(request.form['initial_height'])
    time=float(request.form['time'])
    angle=float(request.form['angle'])

    angle=math.radians(angle)

    velocity_Y=initaial_velocity * math.sin(angle)
    inst_X=initaial_velocity * math.cos(angle)

    time_bc=velocity_Y/gravity
    time_full=(velocity_Y + math.sqrt(2*initial_height*gravity + velocity_Y**2)) / gravity



    if  angle<=1.5708 and  time<=time_bc:
        
        position_Y= initial_height + velocity_Y * time - (gravity * time**2) / 2
        position_X= inst_X * time
        
        position_Y=round(position_Y , 2)
        position_X=round(position_X , 2)

        return render_template('/mechanic/kinematika/height_gasrolili/instant_positon.html' ,X=position_X , Y=position_Y , Dimension="მ" )
    
    elif angle<=1.5708 and  time>time_bc and time <= time_full:

        new_time=time-time_bc

        position_Y = (initial_height + velocity_Y * time_bc - (gravity * time_bc**2) / 2) - ((gravity * new_time**2) / 2)
        position_X= inst_X * time

        position_Y=round(position_Y , 2)
        position_X=round(position_X , 2)

        return render_template('/mechanic/kinematika/height_gasrolili/instant_positon.html' ,X=position_X , Y=position_Y , Dimension="მ" )
    
    else:
        return render_template('/mechanic/kinematika/height_gasrolili/instant_positon.html' ,X="მოცემული მოძრაობა შეუძლებელია" , Y="მოცემული მოძრაობა შეუძლებელია")








#სიმაღლდიან გასროლილი სხეულისთვის ითვლის             დაცემის  კუთხეს
@app.route('/calculator/mechanic/kinematika/height_gasrolili/fall_angle/calculate')
def height_gasrolili_fall_angle():
    return render_template('/mechanic/kinematika/height_gasrolili/fall_angle.html')


@app.route('/calculator/mechanic/kinematika/height_gasrolili/fall_angle/', methods=['GET','POST'])
def height_gasrolili_getvalue_fall_angle():
    gravity=float(request.form['gravity'])
    initaial_velocity=float(request.form['initaial_velocity'])
    initial_height=float(request.form['initial_height'])
    angle=float(request.form['angle'])



    angle=math.radians(angle)

    velocity_Y=initaial_velocity * math.sin(angle)
    inst_X=initaial_velocity * math.cos(angle)

    time_bc=velocity_Y/gravity
    time_full=(velocity_Y + math.sqrt(2*initial_height*gravity + velocity_Y**2)) / gravity



    if angle<=1.5708:

        new_time=time_full - time_bc
        velocity_Y_last= (gravity * new_time)

        fall_angle= math.atan(velocity_Y_last / inst_X )
        
        fall_angle=round((math.degrees(fall_angle)),2)
        
        return render_template('/mechanic/kinematika/height_gasrolili/fall_angle.html', fall_angle=fall_angle, Dimension="°" )   

    else:
        return render_template('/mechanic/kinematika/height_gasrolili/fall_angle.html' , fall_angle="ასეთი მოძრაობა შეუძლებელია" )








@app.route('/calculator/mechanic/kinematika/height_gasrolili/initial_height/calculate')
def height_gasrolili_initial_height():
    return render_template('/mechanic/kinematika/height_gasrolili/initial_height.html')


@app.route('/calculator/mechanic/kinematika/height_gasrolili/initial_height/' , methods=['GET','POST'])
def height_gasrolili_initial_height_calculate():
    gravity=float(request.form['gravity'])
    initaial_velocity=float(request.form['initaial_velocity'])
    angle=float(request.form['angle'])
    selectable=float(request.form['selectable'])
    choose=request.form['select']
    
    angle=math.radians(angle)

    velocity_Y=initaial_velocity * math.sin(angle)
    inst_X=initaial_velocity * math.cos(angle)

    if choose=="ასვლის სიმაღლე" and angle<=1.5708 and ((velocity_Y**2)/(2*gravity))<= selectable :

        initial_height= selectable  -  ( (velocity_Y ** 2) / (2* gravity) )

        initial_height= round(initial_height , 2)

        return render_template('/mechanic/kinematika/height_gasrolili/initial_height.html', initial_height=initial_height, Dimension='მ' )


    elif choose=="ფრენის დრო" and angle<=1.5708  and (gravity*selectable**2-2*velocity_Y*selectable)>=0:

        initial_height= ( gravity*selectable**2  - 2 * velocity_Y * selectable ) / 2
        
        initial_height= round(initial_height , 2)

        return render_template('/mechanic/kinematika/height_gasrolili/initial_height.html', initial_height=initial_height, Dimension='მ' )


    elif choose=="ფრენის მანძილი" and angle<=1.5708 and inst_X>0 and (gravity*selectable**2-selectable*math.sin(2*angle)*initaial_velocity**2)>=0:

        initial_height= (gravity*selectable**2 - selectable * math.sin(2*angle) * initaial_velocity**2) / (2 * inst_X**2 )
        
        initial_height= round(initial_height , 2)

        return render_template('/mechanic/kinematika/height_gasrolili/initial_height.html', initial_height=initial_height, Dimension='მ' )

    elif choose=="საბოლოო სიჩქარე" and angle<=1.5708 and gravity>0:
        
        velocity_Y_last= math.sqrt(selectable**2 - inst_X**2)

        initial_height= (velocity_Y_last**2 - velocity_Y**2) / (2*gravity)
        
        initial_height= round(initial_height , 2)

        return render_template('/mechanic/kinematika/height_gasrolili/initial_height.html', initial_height=initial_height, Dimension='მ' )

    else:
        return render_template('/mechanic/kinematika/height_gasrolili/initial_height.html', initial_height='შეუძლებელია')























if __name__ == '__main__':
    app.run (debug=True)