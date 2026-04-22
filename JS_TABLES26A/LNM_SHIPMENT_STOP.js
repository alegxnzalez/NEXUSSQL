// LNM_SHIPMENT_STOP.js

window.LNM_SHIPMENT_STOP = {
  "tables": {
    "LNM_SHIPMENT_STOP": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_SHIPMENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "STOP_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "This field defines the stop number within the shipment. Stop Num = 1 is the Pickup stop, and the max (Stop Num) for a shipment is the delivery stop."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion."
},
        "STOP_TYPE": {
          "type": "VARCHAR2(16)",
          "nullable": true,
          "info": "Define the type of this stop."
},
        "PLANNED_ARRIVAL": {
          "type": "DATE",
          "nullable": true,
          "info": "The planned date and time of arrival at the stop."
},
        "PLANNED_DEPARTURE": {
          "type": "DATE",
          "nullable": true,
          "info": "The planned departure date and time at the stop."
},
        "IS_FIXED_ARRIVAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_FIXED_DEPARTURE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_PERMANENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_DEPOT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_FIXED_DISTANCE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "When set to Y, indicates the existence of a user-entered value for the dis_from_prev_stop field"
},
        "IS_MOTHER_VESSEL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Desginating a leg as mother vessel to automatically populated header."
},
        "DRIVER_NON_PAYABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "Allows the user to specify that stop is payable or not."
},
        "WAIT_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The time the truck or the transportation mode has to wait at the stop."
},
        "WAIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for WAIT_TIME column."
},
        "WAIT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "WAIT_TIME in base units."
},
        "REST_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The time the truck or the transportation mode should take for rest at the stop."
},
        "REST_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for REST_TIME column."
},
        "REST_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "REST_TIME in base units."
},
        "DRIVE_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The drive time to teh stop from the last stop."
},
        "DRIVE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for DRIVE_TIME column."
},
        "DRIVE_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "DRIVE_TIME in base units."
},
        "DIST_FROM_PREV_STOP": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The distance from the last stop."
},
        "DIST_FROM_PREV_STOP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for DIST_FROM_PREV_STOP column."
},
        "DIST_FROM_PREV_STOP_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "DIST_FROM_PREV_STOP in base units."
},
        "ACTIVITY_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The time spent at the stop for pickup or delivery."
},
        "ACTIVITY_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for ACTIVITY_TIME column."
},
        "ACTIVITY_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "ACTIVITY_TIME in base units."
},
        "ACCESSORIAL_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The sum of fixed_accessorial_time for a particular stop."
},
        "ACCESSORIAL_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "ACCESSORIAL_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "RUSH_HOUR_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "RUSH_HOUR_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "RUSH_HOUR_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "BULKPLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
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
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": [
        "LNM_SHIPMENT_STOP_D"
]
    }
  }
};