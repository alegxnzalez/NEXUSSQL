// INTERIM_FLIGHT.js

window.INTERIM_FLIGHT = {
  "tables": {
    "INTERIM_FLIGHT": {
      "columns": {
        "FLIGHT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "FLIGHT",
          "info": "FLIGHT_GID contains the unique identifier for the interim flight. "
        },
        "FLIGHT_NUMBER": {
          "type": "VARCHAR2(6)",
          "nullable": false,
          "key_value": true,
          "info": "FLIGHT_NUMBER contains the airline flight number for the interim flight. "
        },
        "RECORD_CODE": {
          "type": "NUMBER(2)",
          "nullable": false,
          "key_value": true
        },
        "LEAVE_TIME_AFTER_MIDNIGHT": {
          "type": "NUMBER()",
          "nullable": false
        },
        "LV_TM_AFTER_MIDNIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "LV_TM_AFTER_MIDNIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "ARRIVAL_TIME_AFTER_MIDNIGHT": {
          "type": "NUMBER()",
          "nullable": false
        },
        "AR_TM_AFTER_MIDNIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "AR_TM_AFTER_MIDNIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "SRC_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "SRC_LOCATION_GID contains the unique identifier for the source location of the interim flight. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "DEST_LOCATION_GID contains the unique identifier for the destination location of the interim flight. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV",
          "info": "SERVPROV_GID contains the unique identifier for the service provider for the interim flight. "
        },
        "VEHICLE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "VEHICLE_TYPE",
          "info": "VEHICLE_TYPE_GID is the vehicle type."
        },
        "SERVICE_CLASS": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "STOP_COUNT": {
          "type": "NUMBER(1)",
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
        }
      },
      "fk_tables": []
    }
  }
};
