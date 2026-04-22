// RUSH_HOUR.js

window.RUSH_HOUR = {
  "tables": {
    "RUSH_HOUR": {
      "columns": {
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "X_LANE",
          "info": "The is the lane for which this rush hour delay is defined. "
        },
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CALENDAR",
          "info": "The RUSHHOUR activity on this calendar defines the rush hour period for this rush hour delay to be applied. For exampl, this calendar may defined MORNING 6-9 as the RUSHHOUR, then shipments match to this x-lane that leave a stop between 6-9 in the morning will have a 2 hour delay if the RUSH_HOUR_DELAY_TIME is 2 hour "
        },
        "IS_APPLY_TO_SRC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "key_value": true,
          "info": "If this field is true, then if depature time from a stop falls into the calendar rush hour period, apply the rush hour delay time. If this field is false, then apply the rush hour delay when arrival time at the to-stop falls into the rush hour calendar. "
        },
        "RUSH_HOUR_DELAY_TIME": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Define the rush hour delay for the given lane, the rush hour period and whether it is apply to to-stop or from stop"
        },
        "RUSH_HOUR_DELAY_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "RUSH_HOUR_DELAY_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
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
        "SCENARIO_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
