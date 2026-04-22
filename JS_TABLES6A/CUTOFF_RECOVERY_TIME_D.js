// CUTOFF_RECOVERY_TIME_D.js

window.CUTOFF_RECOVERY_TIME_D = {
  "tables": {
    "CUTOFF_RECOVERY_TIME_D": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CUTOFF_RECOVERY_TIME"
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
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CUTOFF_RECOVERY_TIME",
          "info": "Rate service. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CUTOFF_RECOVERY_TIME",
          "info": "Service provider. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CUTOFF_RECOVERY_TIME",
          "info": "Location. "
        },
        "VOYAGE_SERVICE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VOYAGE_SERVICE_TYPE",
          "info": "Voyage Service Type. "
        },
        "OFFSET_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Duration the delivery must arrive before service provider departs from origin or duration the delivery must wait after service provider arrives at destination. "
        },
        "OFFSET_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for offset_time. "
        },
        "OFFSET_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Comparison value. "
        },
        "DAY_OF_WEEK": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Day of week. "
        },
        "HOUR_ADJUSTMENT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Hour adjustment from midnight. "
        },
        "MINUTE_ADJUSTMENT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Minute Adjustment. "
        },
        "IS_CUTOFF": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "key_value": true,
          "info": "Indicates the record is defined for cutoff or recovery time. When 'Y', it's for cutoff time; when 'N', it's for recovery time. "
        },
        "IS_OFFSET": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "When 'Y', cutoff/recovery time is defined as offset; when 'N', cutoff/recovery time is defined as day-time. "
        },
        "CUTOFF_TYPE": {
          "type": "VARCHAR2(8)",
          "nullable": false,
          "values": [
            "CFS",
            "CY",
            "SI"
          ],
          "key_value": true,
          "info": "Cutoff type.   It can have one of the following values:     CY: \"Container Yard\" - CY cutoff is the gate house time to arrive at the ocean carriers facility.      SI \"Shipping Instruction\" - SI cutoff is the required time for shippers information to be provided to the forwarder.      CFS: \"Container Freight Station\" - CFS Cutoff is the required time to be at a 3rd party location for container packing."
        }
      },
      "fk_tables": []
    }
  }
};
