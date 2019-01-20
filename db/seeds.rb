# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Users
User.delete_all

User.create!(username: 'DemoUser', password: 'password') #1
User.create!(username: 'Filipp', password: 'password') #2
User.create!(username: 'TongueTaco', password: 'password') #3
User.create!(username: 'Mr. Molasses', password: 'password') #4
User.create!(username: 'Little Miss Sunshine', password: 'password') #5
User.create!(username: 'LegCramps', password: 'password') #6
User.create!(username: 'SmileyFace', password: 'password') #7
User.create!(username: '401k Pension Plan', password: 'password') #8
User.create!(username: 'Jon Snow', password: 'password') #9
User.create!(username: 'Genghis Khan', password: 'password') #10
User.create!(username: 'Fresh Salmon', password: 'password') #11

User.create!(username: 'AnimaTV', password: 'tokyoghoul', description: 'Best cinematic animatic hipnomatic animations of past, present, future, forever.', category: 'Film and Animation') #12
User.create!(username: 'Let\'s Learn!', password: 'education', description: 'Free educational and learning videos. Subscribe for New Content Every Week!', category: 'Education') #13
User.create!(username: 'Nature', password: 'phospholipidbilayer', description: 'May Peace be With You', category: 'Nature and Camping') #14
User.create!(username: 'Funny Home Videos', password: 'funnyvideo', description: 'Comedic vieo highlight compilation', category: 'Entertainment') #15
User.create!(username: 'Speedster', password: 'halo3isbest', description: 'World record speed runs of the most classic arcade, RTS, and many other game types!', category: 'Gaming') #16
User.create!(username: 'Industry', password: 'realmenhavebeards', description: 'Clean, calm, precise industrial videos', category: 'Education') #17
User.create!(username: 'Lifestyle Life', password: 'password', description: 'Vlog of my life. The ups. The downs. The everyday.', category: 'People and Blogs') #18
User.create!(username: 'Beats by Moshe', password: 'tothewindowtothewall', description: 'Chill, Relaxing, Hot, Popular, Beats.', category: 'Music') #19 
User.create!(username: 'Tech at Large', password: 'mooreslaw', description: 'Subscribe for the latest and newest information on tech!', category: 'Science and Technology') #20

#videos (48)
Video.delete_all

seed_vid_1 = Video.create!(title: "Got Castles", description: "Animated musical of Castle Kid Cartoon. Singing, Dancing, Birds, and Birdhouses", category: 'Film and Animation', channel_id: 12) # https://s3-us-west-1.amazonaws.com/streamit-videos/animations/got_castles.mp4
  seed_vid_1_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/animations/got_castles.mp4")
  seed_vid_1.video.attach(io: seed_vid_1_attachment, filename: 'got_castles_video')

  seed_vid_1_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/animations/got_castles.png")
  seed_vid_1.preview_image.attach(io: seed_vid_1_photo, filename: 'got_castles_preview' )

seed_vid_2 = Video.create!(title: "Popeye For President", description: "Not even Chuck Norris can stop PopEye from the Presidency", category: 'Film and Animation', channel_id: 12) # https://s3-us-west-1.amazonaws.com/streamit-videos/animations/popeye_president.mp4
  seed_vid_2_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/animations/popeye_president.mp4")
  seed_vid_2.video.attach(io: seed_vid_2_attachment, filename: 'popeye_president_video')

  seed_vid_2_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/animations/popeye_president.png")
  seed_vid_2.preview_image.attach(io: seed_vid_2_photo, filename: 'popeye_president_preview' )
  

seed_vid_3 = Video.create!(title: "Popeye Just Needs Some Sleep", description: "Can't a man just get some sleep?", category: 'Film and Animation', channel_id: 12) # https://s3-us-west-1.amazonaws.com/streamit-videos/animations/shuteye_popeye.mp4
  seed_vid_3_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/animations/shuteye_popeye.mp4")
  seed_vid_3.video.attach(io: seed_vid_3_attachment, filename: 'shuteye_popeye_video')

  seed_vid_3_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/animations/shuteye_popeye.png")
  seed_vid_3.preview_image.attach(io: seed_vid_3_photo, filename: 'shuteye_popeye_preview' )

seed_vid_4 = Video.create!(title: "Sintel", description: "An Adventurer's Tail", category: 'Film and Animation', channel_id: 12) # https://s3-us-west-1.amazonaws.com/streamit-videos/animations/sintel_blender.mp4
  seed_vid_4_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/animations/sintel_blender.mp4")
  seed_vid_4.video.attach(io: seed_vid_4_attachment, filename: 'sintel_blender_video')

  seed_vid_4_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/animations/sintel.png")
  seed_vid_4.preview_image.attach(io: seed_vid_4_photo, filename: 'sintel_preview' )

seed_vid_5 = Video.create!(title: "The Three Stooges Find a Pet", description: "Three Stooges find themselves in a pickle. Stooginess ensues.", category: 'Film and Animation', channel_id: 12) # https://s3-us-west-1.amazonaws.com/streamit-videos/animations/three_stooges.mp4
  seed_vid_5_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/animations/three_stooges.mp4")
  seed_vid_5.video.attach(io: seed_vid_5_attachment, filename: 'three_stooges_video')

  seed_vid_5_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/animations/three_stooges.png")
  seed_vid_5.preview_image.attach(io: seed_vid_5_photo, filename: 'three_stooges_preview' )

seed_vid_6 = Video.create!(title: "Chemistry - The Avogadro Mole", description: "6.023 * 10^23 IS CHEMISTRY" , category: 'Education', channel_id: 13) # https://s3-us-west-1.amazonaws.com/streamit-videos/education/avogadro_mole.mp4
  seed_vid_6_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/education/avogadro_mole.mp4")
  seed_vid_6.video.attach(io: seed_vid_6_attachment, filename: 'avogadro_mole_video')

  seed_vid_6_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/education/avogadro_mole.png")
  seed_vid_6.preview_image.attach(io: seed_vid_6_photo, filename: 'avogadro_mole_preview' )

seed_vid_7 = Video.create!(title: "The Structure of The Banking System", description: "Loan, Interest Rates, Inflation, And The Flow of Money Through Corporate and Governmental Structures", category: 'Education', channel_id: 13) # https://s3-us-west-1.amazonaws.com/streamit-videos/education/banking.mp4
  seed_vid_7_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/education/banking.mp4")
  seed_vid_7.video.attach(io: seed_vid_7_attachment, filename: 'banking_video')

  seed_vid_7_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/education/banking.png")
  seed_vid_7.preview_image.attach(io: seed_vid_7_photo, filename: 'banking_preview' )

seed_vid_8 = Video.create!(title: "Black Holes, The Pull Is Irresistible", description: "General Relativity and Its Applications To SpaceTime Distortion as Evident In Black Holes, Event Horizone, Time Dilatio", category: 'Education', channel_id: 13) # https://s3-us-west-1.amazonaws.com/streamit-videos/education/black_holes.mp4
  seed_vid_8_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/education/black_holes.mp4")
  seed_vid_8.video.attach(io: seed_vid_8_attachment, filename: 'black_holes_video')

  seed_vid_8_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/education/black_holes.png")
  seed_vid_8.preview_image.attach(io: seed_vid_8_photo, filename: 'black_holes_preview' )

seed_vid_9 = Video.create!(title: "Blue Forehead Brain Teaser", description: "If Tricks are For Kids and Teasers are For Measels, then Whose Forehead Was Blue in this Brain Teaser?", category: 'Education', channel_id: 13) # https://s3-us-west-1.amazonaws.com/streamit-videos/education/brain_teaser.mp4
  seed_vid_9_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/education/brain_teaser.mp4")
  seed_vid_9.video.attach(io: seed_vid_9_attachment, filename: 'brain_teaser_video')

  seed_vid_9_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/education/brain_teaser.png")
  seed_vid_9.preview_image.attach(io: seed_vid_9_photo, filename: 'brain_teaser_preview' )

seed_vid_10 = Video.create!(title: "Midwestern Fall Orange Glaze", description: "Gentle calm fall delights. Maple leaves in orange tint. ", category: 'Nature and Camping', channel_id: 14) # https://s3-us-west-1.amazonaws.com/streamit-videos/environment/fall_leaves_orange.mp4
  seed_vid_10_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/fall_leaves_orange.mp4")
  seed_vid_10.video.attach(io: seed_vid_10_attachment, filename: 'fall_leaves_orange_video')

  seed_vid_10_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/fall_leaves_orange.png")
  seed_vid_10.preview_image.attach(io: seed_vid_10_photo, filename: 'fall_leaves_orange_preview' )

seed_vid_11 = Video.create!(title: "Red Maple Leaves", description: "Red Red Red. Fall beckons while nature's flames reckon", category: 'Nature and Camping', channel_id: 14) # https://s3-us-west-1.amazonaws.com/streamit-videos/environment/fall_leaves_red.mp4
  seed_vid_11_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/fall_leaves_red.mp4")
  seed_vid_11.video.attach(io: seed_vid_11_attachment, filename: 'fall_leaves_red_video')

  seed_vid_11_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/fall_leaves_red.png")
  seed_vid_11.preview_image.attach(io: seed_vid_11_photo, filename: 'fall_leaves_red_preview' )

seed_vid_12 = Video.create!(title: "Infinity View - Space Asteroids", description: "Recursion Recursion Recursion Recursion Recursion Recursion Recursion Recursion Recursion Recursion Recursion Recursion Recursion ", category: 'Nature and Camping', channel_id: 14) # https://s3-us-west-1.amazonaws.com/streamit-videos/environment/space_asteroids.mp4
  seed_vid_12_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/space_asteroids.mp4")
  seed_vid_12.video.attach(io: seed_vid_12_attachment, filename: 'space_asteroids_video')

  seed_vid_12_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/space_asteroids.png")
  seed_vid_12.preview_image.attach(io: seed_vid_12_photo, filename: 'space_asteroids_preview' )

seed_vid_13 = Video.create!(title: "Rural City Storm", description: "A storm hit the rural outskirts of Iowa. Clouds darkened. Rain intensified. The wind hit speeds of 90 mph and and sound whisteled through our ears.", category: 'Nature and Camping', channel_id: 14) # https://s3-us-west-1.amazonaws.com/streamit-videos/environment/stormy_clouds.mp4
  seed_vid_13_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/stormy_clouds.mp4")
  seed_vid_13.video.attach(io: seed_vid_13_attachment, filename: 'stormy_clouds_video')

  seed_vid_13_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/stormy_clouds.png")
  seed_vid_13.preview_image.attach(io: seed_vid_13_photo, filename: 'stormy_clouds_preview' )

seed_vid_14 = Video.create!(title: "Ocean Waves Crashing Against The Cliffs", description: "Off the coast of Sardinia the waves hit upon the jagged cliffs", category: 'Nature and Camping', channel_id: 14) # https://s3-us-west-1.amazonaws.com/streamit-videos/environment/waves_crashing_ocean.mp4
  seed_vid_14_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/waves_crashing_ocean.mp4")
  seed_vid_14.video.attach(io: seed_vid_14_attachment, filename: 'waves_crashing_ocean_video')

  seed_vid_14_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/waves_crashing.png")
  seed_vid_14.preview_image.attach(io: seed_vid_14_photo, filename: 'waves_crashing_ocean_preview' )

seed_vid_15 = Video.create!(title: "Wind Turbines in the Open Fields", description: "Alternative Energy - Wind Turbines Driving Down Oil Demand", category: 'Nature and Camping', channel_id: 14) # https://s3-us-west-1.amazonaws.com/streamit-videos/environment/wind_turbines.mp4
  seed_vid_15_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/wind_turbines.mp4")
  seed_vid_15.video.attach(io: seed_vid_15_attachment, filename: 'wind_turbines_video')

  seed_vid_15_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/environment/wind_turbines.png")
  seed_vid_15.preview_image.attach(io: seed_vid_15_photo, filename: 'wind_turbines_preview' )

seed_vid_16 = Video.create!(title: "Two Boys and One Pool", description: "The Most Satisfying StreamIt Video To Date", category: 'Entertainment', channel_id: 15) # https://s3-us-west-1.amazonaws.com/streamit-videos/funny/two_boys_one_pool.mp4
  seed_vid_16_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/funny/two_boys_one_pool.mp4")
  seed_vid_16.video.attach(io: seed_vid_16_attachment, filename: 'two_boys_one_pool_video')

  seed_vid_16_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/funny/two_boys_one_pool.png")
  seed_vid_16.preview_image.attach(io: seed_vid_16_photo, filename: 'two_boys_one_pool_preview' )

seed_vid_17 = Video.create!(title: "Chrono Trigger Speed Run Sub 7 Minutes!", description: "Sub 7 Minute Chrono Speed Run! This man is insane!", category: 'Gaming', channel_id: 16) # https://s3-us-west-1.amazonaws.com/streamit-videos/game_speed_runs/chrono_trigger.mp4
  seed_vid_17_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/game_speed_runs/chrono_trigger.mp4")
  seed_vid_17.video.attach(io: seed_vid_17_attachment, filename: 'chrono_trigger_video')

  seed_vid_17_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/game_speed_runs/chrono_trigger.png")
  seed_vid_17.preview_image.attach(io: seed_vid_17_photo, filename: 'chrono_trigger_preview' )

seed_vid_18 = Video.create!(title: "Sub 10 Minute Zelda Speed Run", description: "Link came. Link saw. Link conquered.", category: 'Gaming', channel_id: 16) # https://s3-us-west-1.amazonaws.com/streamit-videos/game_speed_runs/zelda.mp4
  seed_vid_18_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/game_speed_runs/zelda.mp4")
  seed_vid_18.video.attach(io: seed_vid_18_attachment, filename: 'zelda_video')

  seed_vid_18_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/game_speed_runs/zelda.png")
  seed_vid_18.preview_image.attach(io: seed_vid_18_photo, filename: 'zelda_preview' )

seed_vid_19 = Video.create!(title: "Fishing Boat Docked By the Port", description: "Shipping Vessel Docks in Italian Port City", category: 'Education', channel_id: 17) # https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Fishing+Boat+At+Port.mp4
  seed_vid_19_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Fishing+Boat+At+Port.mp4")
  seed_vid_19.video.attach(io: seed_vid_19_attachment, filename: 'fishing_boat_at_port_video')

  seed_vid_19_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Fishing_Boat_At_Port.png")
  seed_vid_19.preview_image.attach(io: seed_vid_19_photo, filename: 'fishing_boat_at_port_preview' )

seed_vid_20 = Video.create!(title: "Hammer and Nail", description: "The Classic Tale of the Hammer and the Nail.", category: 'Education', channel_id: 17) # https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Hammer+Down+a+Nail.mp4
  seed_vid_20_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Hammer+And+The+Nail.mp4")
  seed_vid_20.video.attach(io: seed_vid_20_attachment, filename: 'hammer_and_the_nail_video')

  seed_vid_20_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Hamme+And+The+Nail.png")
  seed_vid_20.preview_image.attach(io: seed_vid_20_photo, filename: 'hammer_and_the_nail_preview' )

seed_vid_21 = Video.create!(title: "Manufacturing ASMR", description: "Stainless Steel Drill rotation at 4000 rpm", category: 'Education', channel_id: 17) # https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Manufacturing.mp4
  seed_vid_21_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Manufacturing.mp4")
  seed_vid_21.video.attach(io: seed_vid_21_attachment, filename: 'manufacturing_video')

  seed_vid_21_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Manufacturing.png")
  seed_vid_21.preview_image.attach(io: seed_vid_21_photo, filename: 'manufacturing_preview' )

seed_vid_22 = Video.create!(title: "Warm Light Bulb Glow", description: "Campfire night time light glowing effervescent red", category: 'Education', channel_id: 17) # https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Swinging+Light+Bulb.mp4
  seed_vid_22_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Swinging+Light+Bulb.mp4")
  seed_vid_22.video.attach(io: seed_vid_22_attachment, filename: 'swinging_light_bulb_video')

  seed_vid_22_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Swinging+Light+Bulb.png")
  seed_vid_22.preview_image.attach(io: seed_vid_22_photo, filename: 'swinging_light_bulb_preview' )

seed_vid_23 = Video.create!(title: "Vineyard Fields In Southern Spain", description: "The Andorra vineyards of Spain" , category: 'Education', channel_id: 17) # https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Vineyard+Production.mp4
  seed_vid_23_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Vineyard+Production.mp4")
  seed_vid_23.video.attach(io: seed_vid_23_attachment, filename: 'vineyard_production_video')

  seed_vid_23_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/Vineyard+Production.png")
  seed_vid_23.preview_image.attach(io: seed_vid_23_photo, filename: 'vineyard_production_preview' )

seed_vid_24 = Video.create!(title: "Pipe Cutting ASMR", description: "Quiet, Relaxing, Meditative Pipe Cutting", category: 'Education', channel_id: 17) # https://s3-us-west-1.amazonaws.com/streamit-videos/industry/cutting_pipe.mp4
  seed_vid_24_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/cutting_pipe.mp4")
  seed_vid_24.video.attach(io: seed_vid_24_attachment, filename: 'cutting_pipe_video')

  seed_vid_24_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/industry/cutting_pipe.png")
  seed_vid_24.preview_image.attach(io: seed_vid_24_photo, filename: 'cutting_pipe_preview' )

seed_vid_25 = Video.create!(title: "Friday Day of Fun and Fair", description: "Wyoming Carnival Fun - August 2018", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/Fun+Fair.mp4
  seed_vid_25_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/Fun+Fair.mp4")
  seed_vid_25.video.attach(io: seed_vid_25_attachment, filename: 'fun_fair_video')

  seed_vid_25_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/Fun+Fair.png")
  seed_vid_25.preview_image.attach(io: seed_vid_25_photo, filename: 'fun_fair_preview' )

seed_vid_26 = Video.create!(title: "Peaceful Beach Retreat at Lisbon Portugal", description: "The ships just docked on the Western city edge. The weather is sunny. The temperature is warm. Life is great", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/People+Having+Fun+At+The+Beach.mp4
  seed_vid_26_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/People+Having+Fun+At+The+Beach.mp4")
  seed_vid_26.video.attach(io: seed_vid_26_attachment, filename: 'people_having_fun_at_the_beach_video')

  seed_vid_26_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/People+Having+Fun+At+The+Beach.png")
  seed_vid_26.preview_image.attach(io: seed_vid_26_photo, filename: 'people_having_fun_at_the_beach_preview' )

seed_vid_27 = Video.create!(title: "Mercedes", description: "Fast. Luxurious. Prestige. Mercedes.", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/car_mercedes.mp4
  seed_vid_27_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/car_mercedes.mp4")
  seed_vid_27.video.attach(io: seed_vid_27_attachment, filename: 'car_mercedes_video')

  seed_vid_27_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/car_mercedes.png")
  seed_vid_27.preview_image.attach(io: seed_vid_27_photo, filename: 'car_mercedes_preview' )

seed_vid_28 = Video.create!(title: "Bird Eye View City Driving", description: "From the Sky's Outskirts, Eagles Flying Peering Down upon Land's Vicissitudes", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/city_aerial.mp4
  seed_vid_28_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/city_aerial.mp4")
  seed_vid_28.video.attach(io: seed_vid_28_attachment, filename: 'city_aerial_video')

  seed_vid_28_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/city_aerial.png")
  seed_vid_28.preview_image.attach(io: seed_vid_28_photo, filename: 'city_aerial_preview' )

seed_vid_29 = Video.create!(title: "Bearded Man By Fire Thinks He's Jesus", description: "My friend Joe recently came back from a trip to the Tibetan temple. This ensued on my first time seeing him...", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/fire_man.mp4
  seed_vid_29_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/fire_man.mp4")
  seed_vid_29.video.attach(io: seed_vid_29_attachment, filename: 'fire_man_video')

  seed_vid_29_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/fire_man.png")
  seed_vid_29.preview_image.attach(io: seed_vid_29_photo, filename: 'fire_man_preview' )

seed_vid_30 = Video.create!(title: "Flames", description: "The night is dark and full of terrors.", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/fire_video.mp4
  seed_vid_30_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/fire_video.mp4")
  seed_vid_30.video.attach(io: seed_vid_30_attachment, filename: 'fire_video')

  seed_vid_30_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/fire_video.png")
  seed_vid_30.preview_image.attach(io: seed_vid_30_photo, filename: 'fire_preview' )

seed_vid_31 = Video.create!(title: "Volcano Row", description: "Full Body Intense HIIT calorie burning muscle building endorphin releasing cardio workout at Volcano Gym", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/girl_working_out.mp4
  seed_vid_31_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/girl_working_out.mp4")
  seed_vid_31.video.attach(io: seed_vid_31_attachment, filename: 'girl_working_out_video')

  seed_vid_31_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/girl_working_out.png")
  seed_vid_31.preview_image.attach(io: seed_vid_31_photo, filename: 'girl_working_out_preview' )

seed_vid_32 = Video.create!(title: "Sunday Morning Delights", description: "I went out with my best friend Jen to this cute little cafe while we were in Belgium", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/served_food.mp4
  seed_vid_32_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/served_food.mp4")
  seed_vid_32.video.attach(io: seed_vid_32_attachment, filename: 'served_food_video')

  seed_vid_32_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/served_food.png")
  seed_vid_32.preview_image.attach(io: seed_vid_32_photo, filename: 'served_food_preview' )

seed_vid_33 = Video.create!(title: "French Alps Ski Getaway", description: "Skiing on top of the world. #Blessed", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/ski_resort.mp4
  seed_vid_33_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/ski_resort.mp4")
  seed_vid_33.video.attach(io: seed_vid_33_attachment, filename: 'ski_resort_video')

  seed_vid_33_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/ski_resort.png")
  seed_vid_33.preview_image.attach(io: seed_vid_33_photo, filename: 'ski_resort_preview' )

seed_vid_34 = Video.create!(title: "Nightlife TimeLaps", description: "The backstreets of Miami. Time standing still.", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/timelapse.mp4
  seed_vid_34_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/timelapse.mp4")
  seed_vid_34.video.attach(io: seed_vid_34_attachment, filename: 'timelapse_video')

  seed_vid_34_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/timelapse.png")
  seed_vid_34.preview_image.attach(io: seed_vid_34_photo, filename: 'timelapse_preview' )

seed_vid_35 = Video.create!(title: "1001 Vegas Nights", description: "Sin City Christmas Lights. Gambling Drugs and More. Merry Christmas", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/vegas_night.mp4
  seed_vid_35_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/vegas_night.mp4")
  seed_vid_35.video.attach(io: seed_vid_35_attachment, filename: 'vegas_nights_video')

  seed_vid_35_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/vegas_night.png")
  seed_vid_35.preview_image.attach(io: seed_vid_35_photo, filename: 'vegas_nights_preview' )

seed_vid_36 = Video.create!(title: "Side Sitting Sights", description: "Just another day. Just another life. Walking Past.", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/walk_city.mp4
  seed_vid_36_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/walk_city.mp4")
  seed_vid_36.video.attach(io: seed_vid_36_attachment, filename: 'walk_city_video')

  seed_vid_36_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/walk_city.png")
  seed_vid_36.preview_image.attach(io: seed_vid_36_photo, filename: 'walk_city_preview' )

seed_vid_37 = Video.create!(title: "Cancun Ocean Waves", description: "Mexico vacation in Cancun. The Atlantic Ocean screaming in the backdrop", category: 'People and Blogs', channel_id: 18) # https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/woman_at_beach.mp4
  seed_vid_37_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/woman_at_beach.mp4")
  seed_vid_37.video.attach(io: seed_vid_37_attachment, filename: 'woman_at_beach_video')

  seed_vid_37_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/lifestyle/woman_at_beach.png")
  seed_vid_37.preview_image.attach(io: seed_vid_37_photo, filename: 'woman_at_beach_preview' )

seed_vid_38 = Video.create!(title: "Electro Drop Act - One", description: "Electro Drop House Music Part Life Night Time Club Music BreakDance Chill Relaxation", category: 'Music', channel_id: 19) # https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music1.mp4
  seed_vid_38_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music1.mp4")
  seed_vid_38.video.attach(io: seed_vid_38_attachment, filename: 'electro_music1_video')

  seed_vid_38_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music1.png")
  seed_vid_38.preview_image.attach(io: seed_vid_38_photo, filename: 'electro_music1_preview' )

seed_vid_39 = Video.create!(title: "Electro Drop Act - Two", description: "Electro Drop House Music Part Life Night Time Club Music BreakDance Chill Relaxation", category: 'Music', channel_id: 19) # https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music2.mp4
  seed_vid_39_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music2.mp4")
  seed_vid_39.video.attach(io: seed_vid_39_attachment, filename: 'electro_music2_video')

  seed_vid_39_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music2.png")
  seed_vid_39.preview_image.attach(io: seed_vid_39_photo, filename: 'electro_music2_preview' )

seed_vid_40 = Video.create!(title: "Electro Drop Act - Three", description: "Electro Drop House Music Part Life Night Time Club Music BreakDance Chill Relaxation", category: 'Music', channel_id: 19) # https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music3.mp4
  seed_vid_40_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music3.mp4")
  seed_vid_40.video.attach(io: seed_vid_40_attachment, filename: 'electro_music3_video')

  seed_vid_40_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music3.png")
  seed_vid_40.preview_image.attach(io: seed_vid_40_photo, filename: 'electro_music3_preview' )

seed_vid_41 = Video.create!(title: "Electro Drop Act - Four", description: "Electro Drop House Music Part Life Night Time Club Music BreakDance Chill Relaxation", category: 'Music', channel_id: 19) # https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music4.mp4
  seed_vid_41_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music4.mp4")
  seed_vid_41.video.attach(io: seed_vid_41_attachment, filename: 'electro_music4_video')

  seed_vid_41_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music4.png")
  seed_vid_41.preview_image.attach(io: seed_vid_41_photo, filename: 'electro_music4_preview' )

seed_vid_42 = Video.create!(title: "Electro Drop Act - Five", description: "Electro Drop House Music Part Life Night Time Club Music BreakDance Chill Relaxation", category: 'Music', channel_id: 19) # https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music5.mp4
  seed_vid_42_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music5.mp4")
  seed_vid_42.video.attach(io: seed_vid_42_attachment, filename: 'electro_music5_video')

  seed_vid_42_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/music/electro_music5.png")
  seed_vid_42.preview_image.attach(io: seed_vid_42_photo, filename: 'electro_music5_preview' )

seed_vid_43 = Video.create!(title: "3D Printer Printing Print", description: "Real time visualization of 3D product rendering", category: 'Science and Technology', channel_id: 20) # https://s3-us-west-1.amazonaws.com/streamit-videos/tech/3D+Printer+Printing.mp4
  seed_vid_43_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/tech/3D+Printer+Printing.mp4")
  seed_vid_43.video.attach(io: seed_vid_43_attachment, filename: '3D_printer_printing_video')

  seed_vid_43_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/tech/3D+Printer+Printing.png")
  seed_vid_43.preview_image.attach(io: seed_vid_43_photo, filename: '3D_printer_printing_preview' )

seed_vid_44 = Video.create!(title: "3D Satellite Rendering Mockup", description: "NASA satellite product mockup for 3D rendering technology. Silicon wafers and test material for electrical circuitry", category: 'Science and Technology', channel_id: 20) # https://s3-us-west-1.amazonaws.com/streamit-videos/tech/3D_satellite_mockup.mp4
  seed_vid_44_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/tech/3D_satellite_mockup.mp4")
  seed_vid_44.video.attach(io: seed_vid_44_attachment, filename: '3D_satellite_mockup_video')

  seed_vid_44_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/tech/3D_satellite_mockup.png")
  seed_vid_44.preview_image.attach(io: seed_vid_44_photo, filename: '3D_satellite_mockup_preview' )

seed_vid_45 = Video.create!(title: "Elevator Goes Up. Then It Goes Down.", description: "While (true) { Up. Down.}", category: 'Science and Technology', channel_id: 20) # https://s3-us-west-1.amazonaws.com/streamit-videos/tech/Elevators+Going+Up+And+Down.mp4
  seed_vid_45_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/tech/Elevators+Going+Up+And+Down.mp4")
  seed_vid_45.video.attach(io: seed_vid_45_attachment, filename: 'elevator_going_up_and_down_video')

  seed_vid_45_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/tech/Elevators+Going+Up+And+Down.png")
  seed_vid_45.preview_image.attach(io: seed_vid_45_photo, filename: 'elevator_going_up_and_down_preview' )

seed_vid_46 = Video.create!(title: "New VR Release. Greatest Experience! Buy Now!", description: "Zuckerberg just released FB VR. Recent demo FB yearly presentation!", category: 'Science and Technology', channel_id: 20) # https://s3-us-west-1.amazonaws.com/streamit-videos/tech/VR_demo.mp4
  seed_vid_46_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/tech/VR_demo.mp4")
  seed_vid_46.video.attach(io: seed_vid_46_attachment, filename: 'VR_demo_video')

  seed_vid_46_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/tech/VR_demo.png")
  seed_vid_46.preview_image.attach(io: seed_vid_46_photo, filename: 'VR_demo_preview' )
  

seed_vid_47 = Video.create!(title: "Apple. More Marketing. Buy.", description: "New IMac XTS demo release. Promotional video. 4k resolution. 256 GB RAM. 10 petabyte SSD.", category: 'Science and Technology', channel_id: 20) # https://s3-us-west-1.amazonaws.com/streamit-videos/tech/apple_presentation.mp4
  seed_vid_47_attachment = open("https://s3-us-west-1.amazonaws.com/streamit-videos/tech/apple_presentation.mp4")
  seed_vid_47.video.attach(io: seed_vid_47_attachment, filename: 'apple_presentation_video')

  seed_vid_47_photo = open("https://s3-us-west-1.amazonaws.com/streamit-videos/tech/apple_presentation.png")
  seed_vid_47.preview_image.attach(io: seed_vid_47_photo, filename: 'apple_presentation_preview' )

#Views
  #view = View.create!(user_id: '', video_id: '')
  #users = 20
  #videos = 47
#weighted_vids = 19, 26, 29, 31, 33, 4, 14, 20, 16, 25

#gives weights to preferred videos, so they will be more likely to appear on recommended page
user_ids = (1..20).to_a
weighted_vids = [19,26,29,31,33,4,14,20,16,25]
video_ids = (1..47).to_a.concat(weighted_vids.reduce([]) { |new_arr, vid_id| new_arr.concat([vid_id] * 10)}).sort

View.delete_all

1000.times do 
  View.create!(user_id: user_ids.sample, video_id: video_ids.sample)
end


#subscriptions seeding

user_ids = (1..20).to_a
channel_ids = (12..20).to_a

Subscription.delete_all

1000.times do
  Subscription.create!(user_id: user_ids.sample, channel_id: channel_ids.sample)
end