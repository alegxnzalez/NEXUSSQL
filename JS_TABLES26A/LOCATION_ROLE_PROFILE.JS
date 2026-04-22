// LOCATION_ROLE_PROFILE.js

window.LOCATION_ROLE_PROFILE = {
  "tables": {
    "LOCATION_ROLE_PROFILE": {
      "description": "Detail information about the location role(s). The detail information consists of the minimum stop time at the location, location hours per role. For e.g., the location time for the loading zone can be 8 AM to 5 PM but unloading time may be 12 noon to 7 PM.",
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the location."
},
        "LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE",
          "info": "The GID for the location role."
},
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR",
          "info": "The GID for the calendar used for the location role profile."
},
        "X_DOCK_IS_INBOUND_BIAS": {
          "type": "CHAR(1)",
          "nullable": true,
          "info": "The inbound bias flag for the cross-dock should be selected if you want to emphasize optimization inbound to the cross-dock. If you clear the check box, then the system will optimize outbound from the cross-dock instead."
},
        "FIXED_HANDLING_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Fixed amount of time. No matter the size of the shipment required for handling."
},
        "FIXED_HANDLING_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the fixed handling time. Days, hours, minutes."
},
        "FIXED_HANDLING_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The fixed handling time in base units."
},
        "VAR_HANDLING_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Amount of time required to handle the amount of weight defined by the variable handling weight value."
},
        "VAR_HANDLING_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the variable handling time. Days, hours, minutes."
},
        "VAR_HANDLING_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Variable handling time in base units."
},
        "CREATE_XDOCK_HANDLING_SHIPMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Using the Create Crossdock Handling Shipment field creates handling shipments as part of the cross-dock building process. Clear the check box to bulk plan cross-docks without handling shipments. Fixed Handling Time: Same as above. The Variable Handling Time and the Variable Handling Weight: Same as above. Max Freight Idle Time: Same as above."
},
        "CREATE_POOL_HANDLING_SHIPMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Creates pool handling shipments."
},
        "VAR_HANDLING_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Variable handling time weight defines rate of handling defined by weight."
},
        "VAR_HANDLING_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the variable handling time weight."
},
        "VAR_HANDLING_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Variable handling time weight in the base unit of measure."
},
        "MAX_FREIGHT_IDLE_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum time freight can sit idle at the cross-dock."
},
        "MAX_FREIGHT_IDLE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum idle time."
},
        "MAX_FREIGHT_IDLE_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Idle time in the base unit of measure."
},
        "PCT_ACTIVITY_BEFORE_LOC_OPEN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This value will be divided by 100 in the application to be used as a percentage. The valid value for this column is >= 0 and <= 100. When it is null, treat as 0 for location role SHIPPING/RECEIVING"
},
        "PCT_ACTIVITY_AFTER_LOC_CLOSE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This value will be divided by 100 in the application to be used as a percentage. The valid value for this column is >= 0 and <= 100. When null, treat as 100 for location role SHIPPING/RECEIVING"
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
        "IS_ALLOW_MIXED_FREIGHT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Check box option used to indicate if mixed freight (e.g., a rainbow pallet) will be allowed, is so then select the Allow Mixed Freight option."
},
        "THU_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC_PROFILE",
          "info": "The GID for the transport profile. To handle mixed items you need to include the THU profile here and on the order release line. You also need to attach appropriate packaging reference unit (PRU) to the THU to indicate that it is a mixed THU that takes only mixed items but does not take SAME or LIKE items. See Order Release Line help for details."
},
        "VAR_HNDCST_WGT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The planning handling cost weight at this location."
},
        "VAR_HNDCST_WGT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the variable handling cost."
},
        "VAR_HNDCST_WGT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The variable handling cost weight in base units."
},
        "VAR_HNDCST_WGT_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Variable Handling Cost Per Weight at this location."
},
        "VAR_HNDCST_WGT_COST_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the variable handling cost weight currency."
},
        "VAR_HNDCST_WGT_COST_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The variable handling cost weight in base units"
},
        "VAR_HNDCST_VOL": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The planning handling cost volume at this location."
},
        "VAR_HNDCST_VOL_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The handling cost volume unit of measure."
},
        "VAR_HNDCST_VOL_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The handling cost volume in base units."
},
        "VAR_HNDCST_VOL_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The variable handling cost per volume at this location."
},
        "VAR_HNDCST_VOL_COST_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the variable handling cost volume currency."
},
        "VAR_HNDCST_VOL_COST_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The variable handling cost per volume in base units."
}
      },
      "fk_tables": [
        "LEG",
        "LOAD_CONFIG_RULE",
        "LOCATION_ACTIVITY_TIME_DEF",
        "LOCATION_ROLE_PROFILE_CAL",
        "LOCATION_THU_CAPACITY",
        "LOCATION_THU_PRU_CAPACITY",
        "LOC_ROLE_PROFILE_HANDLING"
]
    }
  }
};