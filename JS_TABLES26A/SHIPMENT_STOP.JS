// SHIPMENT_STOP.js

window.SHIPMENT_STOP = {
  "tables": {
    "SHIPMENT_STOP": {
      "description": "This table stores departure and arrival information about every stop along the way for the life of the shipment (both planned and actual).  The key is both the SHIPMENT_GID and the STOP_NUM.",
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT",
          "info": "The GID for the equipment associated to a shipment."
},
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "info": "The stop number within the shipment. Stop number = 1 is the pickup stop, and the max (stop number) for a shipment is the delivery stop."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "The location GID for the shipment stop."
},
        "LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_ROLE",
          "info": "The location role GID for the shipment stop (such as port, cross dock, etc.)."
},
        "PLANNED_ARRIVAL": {
          "type": "DATE",
          "nullable": true,
          "info": "The planned date and time of arrival at the stop."
},
        "ESTIMATED_ARRIVAL": {
          "type": "DATE",
          "nullable": true,
          "info": "The estimated time of arrival at the stop. It represents the up to the minute ETA that takes into account ETA updates. This date is editable by the carrier or load planner and should incorporate any known delays to delivery. It represents to the best of our knowledge, when we expect the shipment to arrive."
},
        "IS_FIXED_ARRIVAL": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "A Y/N indicator defining the arrival time as fixed and will not be changed on subsequent modification."
},
        "ACTUAL_ARRIVAL": {
          "type": "DATE",
          "nullable": true,
          "info": "A Y/N indicator defining the arrival time as fixed and will not be changed on subsequent modification."
},
        "PLANNED_DEPARTURE": {
          "type": "DATE",
          "nullable": true,
          "info": "The planned departure date and time at the stop."
},
        "ESTIMATED_DEPARTURE": {
          "type": "DATE",
          "nullable": true,
          "info": "The estimated time of departure for the stop. It represents the up to the minute ETA that takes into account ETA updates. This date is editable by the carrier or load planner and should incorporate any known delays to departure. It represents to the best of our knowledge, when we expect the shipment to depart from the stop."
},
        "IS_FIXED_DEPARTURE": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "A Y/N indicator defining the departure time as fixed and will not be changed on subsequent modification."
},
        "ACTUAL_DEPARTURE": {
          "type": "DATE",
          "nullable": true,
          "info": "The actual departure date and time at the stop."
},
        "WAIT_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The time the truck or the transportation mode has to wait at the stop."
},
        "WAIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the wait time."
},
        "WAIT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The wait time in base units."
},
        "REST_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The time the truck or the transportation mode should take for rest at the stop."
},
        "REST_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the rest time."
},
        "REST_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The rest time in base units."
},
        "DRIVE_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The drive time to the stop from the last stop."
},
        "DRIVE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the drive time."
},
        "DRIVE_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The drive time in base units."
},
        "DIST_FROM_PREV_STOP": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The distance from the last stop."
},
        "DIST_FROM_PREV_STOP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the distance from previous stop."
},
        "DIST_FROM_PREV_STOP_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The distance from previous stop in base units."
},
        "ACTIVITY_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The time spent at the stop for pickup or delivery."
},
        "ACTIVITY_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the activity time."
},
        "ACTIVITY_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The activity time in base units."
},
        "IS_PERMANENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Y/N indicator defining the stop as permanent and will not be changed on subsequent modifications."
},
        "IS_DEPOT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Y/N indicator used to define if the stop is a depot."
},
        "APPOINTMENT_PICKUP": {
          "type": "DATE",
          "nullable": true,
          "info": "A Y/N indicator defining if the stop requires a pickup appointment."
},
        "APPOINTMENT_DELIVERY": {
          "type": "DATE",
          "nullable": true,
          "info": "A Y/N indicator defining if the stop requires a delivery appointment."
},
        "ACCESSORIAL_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The sum of the fixed accessorial time for a particular stop."
},
        "ACCESSORIAL_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The accessorial time unit of measure."
},
        "ACCESSORIAL_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The accessorial time in the base unit of measure."
},
        "PARENT_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "If an operational location, such as terminal at a port, is chosen for this stop, the location GID will be copied to this field and the location GID field will contain the operational location."
},
        "LOCATION_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "The location GID defining the location to be used to override the actual location on the stop record."
},
        "STOP_REQUIREMENT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "MANDATORY",
                    "OPTIONAL"
          ],
          "info": "Used only for trips."
},
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE",
          "info": "The rate service GID set if the stop times were calculated using the rate service engine."
},
        "ARBITRARY_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
                    "SOURCE",
                    "DEST"
          ],
          "info": "SOURCE or DEST to indicate the type of arbitrary. If null, this stop is not an arbitrary."
},
        "IS_FIXED_DISTANCE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "When set to Y, indicates the existence of a user-entered value for the distance from previous stop field."
},
        "EXT_SEQ_NO": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The external sequence number for the stop."
},
        "RUSH_HOUR_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The amount of time that the drive time defined on the stop in inside the rush hour window."
},
        "RUSH_HOUR_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The rush hour unit of measure code."
},
        "RUSH_HOUR_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The rush hour time in the base unit of measure."
},
        "VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VOYAGE",
          "info": "The voyage GID."
},
        "IS_MOTHER_VESSEL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Designates a leg as mother vessel to automatically populated header."
},
        "FLIGHT_INSTANCE_ID": {
          "type": "NUMBER(10)",
          "nullable": true,
          "foreign_key": "FLIGHT_INSTANCE",
          "info": "The flight instance GID."
},
        "REPETITION_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REPETITION_SCHEDULE",
          "info": "The repetition schedule GID if the stop times were calculated from a repetition schedule."
},
        "STOP_TYPE": {
          "type": "VARCHAR2(16)",
          "nullable": true,
          "values": [
                    "P",
                    "D",
                    "PD",
                    "O",
                    "NFR",
                    "T"
          ],
          "info": "Define the type of this stop."
},
        "SLACK_VARIANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The slack variance."
},
        "DRIVER_NON_PAYABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allows the user to specify that stop is payable or not."
},
        "REPETITION_SCHED_STOP_NUMBER": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The repetition schedule stop GID if the stop times were calculated from a repetition schedule."
},
        "DISTANCE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "L - Loaded, B- Bobtail, D - Deadhead"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "APPOINTMENT_WINDOW_START": {
          "type": "DATE",
          "nullable": true,
          "info": "The appointment window start."
},
        "APPOINTMENT_WINDOW_END": {
          "type": "DATE",
          "nullable": true,
          "info": "The appointment window end."
},
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_DISTANCE",
          "info": "The rate distance to be used when finding distance from this stop to next stop. This is done mainly for arbitrary case."
},
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE",
          "info": "The route code to be used when finding distance from this stop to next stop This is done mainly for handling arbitrary case."
},
        "RUNNING_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The running total weight from current stop to next stop."
},
        "RUNNING_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the running weight column."
},
        "RUNNING_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The running weight contains the running weight in base units."
},
        "RUNNING_LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The running total length from current stop to next stop."
},
        "RUNNING_LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The running length contains the running length in base units."
},
        "RUNNING_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the running length."
},
        "RUNNING_WIDTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The running total width from current stop to next stop."
},
        "RUNNING_WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The running width contains the running width in base units."
},
        "RUNNING_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the running width column."
},
        "RUNNING_HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The running total height from current stop to next stop."
},
        "RUNNING_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The running height contains the running height in base units."
},
        "RUNNING_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the running height column."
},
        "LEFT_WIDTH_OOG": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The left width-wise out of gauge."
},
        "LEFT_WIDTH_OOG_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The left width-wise out of gauge in base units."
},
        "LEFT_WIDTH_OOG_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the left width out of gauge column."
},
        "RIGHT_WIDTH_OOG": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The right width-wise out of gauge."
},
        "RIGHT_WIDTH_OOG_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The right width-wise out of gauge in base units."
},
        "RIGHT_WIDTH_OOG_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the right width out of gauge column."
},
        "FWD_LENGTH_OOG": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The forward length-wise out of gauge."
},
        "FWD_LENGTH_OOG_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The forward length-wise out of gauge in base units."
},
        "FWD_LENGTH_OOG_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the forward length wise out of gauge column."
},
        "REAR_LENGTH_OOG": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The rear length-wise out of gauge."
},
        "REAR_LENGTH_OOG_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The rear length-wise out of gauge in base units."
},
        "REAR_LENGTH_OOG_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the rear length-wise out of gauge column."
},
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "PREDICTED_ARRIVAL": {
          "type": "DATE",
          "nullable": true,
          "info": "Denotes the predicted arrival time at the stop."
},
        "PREDICTED_ARRIVAL_LOW": {
          "type": "DATE",
          "nullable": true,
          "info": "Denotes the predicted arrival time low value at the stop."
},
        "PREDICTED_ARRIVAL_HIGH": {
          "type": "DATE",
          "nullable": true,
          "info": "Denotes the predicted arrival time high value at the stop."
},
        "EXTERNAL_VOYAGE_CODE": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "Specifies the number of the voyage as assigned by the carrier that transports the shipments from this stop."
},
        "APPOINTMENT_DURATION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total appointment duration at the stop."
},
        "APPOINTMENT_DURATION_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The appointment duration in base units."
},
        "APPOINTMENT_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the appointment duration."
},
        "NFR_STOP_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "values": [
                    "WA",
                    "REST"
          ],
          "info": "Defines how or process that NFR stop got added"
}
      },
      "fk_tables": [
        "SHIPMENT_SPECIAL_SERVICE",
        "SHIPMENT_STOP_ACTIVITY",
        "SHIPMENT_STOP_D",
        "SHIPMENT_STOP_DEBRIEF",
        "SHIPMENT_STOP_INV_PARTY",
        "SHIPMENT_STOP_REFNUM",
        "SHIPMENT_STOP_REMARK",
        "SHIPMENT_STOP_STATUS",
        "SHIPMENT_S_EQUIPMENT_JOIN"
]
    }
  }
};