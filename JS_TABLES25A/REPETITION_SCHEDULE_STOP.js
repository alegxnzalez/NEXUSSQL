// REPETITION_SCHEDULE_STOP.js

window.REPETITION_SCHEDULE_STOP = {
  "tables": {
    "REPETITION_SCHEDULE_STOP": {
      "columns": {
        "REPETITION_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPETITION_SCHEDULE"
        },
        "SEQUENCE": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "info": "Used to make the primary key unique.  The stop number is not used to make the primary key unique in case the stop numbers need to be modified."
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION"
        },
        "STOP_NUMBER": {
          "type": "NUMBER(3)",
          "nullable": false
        },
        "STOP_REQUIREMENT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
            "MANDATORY",
            "OPTIONAL"
          ]
        },
        "IS_ALLOW_PICKUP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_ALLOW_DELIVERY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "MAX_PICKUP_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_PICKUP_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_PICKUP_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_PICKUP_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_PICKUP_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_PICKUP_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_DELIVERY_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_DELIVERY_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_DELIVERY_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_DELIVERY_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_DELIVERY_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_DELIVERY_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DTIME_FROM_PREV_STOP": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DTIME_FROM_PREV_STOP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "DTIME_FROM_PREV_STOP_BASE": {
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
        "IS_FIXED_ARRIVAL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_FIXED_DEPARTURE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        }
      },
      "fk_tables": [
        "REPETITION_SCHEDULE_STOP_D"
      ]
    }
  }
};
