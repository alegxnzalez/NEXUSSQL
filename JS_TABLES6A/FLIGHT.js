// FLIGHT.js

window.FLIGHT = {
  "tables": {
    "FLIGHT": {
      "columns": {
        "FLIGHT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "FLIGHT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "MAJOR_RECORD_TYPE": {
          "type": "VARCHAR2(2)",
          "nullable": false
        },
        "IS_AIR_CARGO": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
        "ELAPSED_TIME": {
          "type": "NUMBER()",
          "nullable": false
        },
        "ELAPSED_TM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "ELAPSED_TM_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "FLIGHT_CATEGORY": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "SRC_IATA_CITY_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false
        },
        "DEST_IATA_CITY_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false
        },
        "DAY_ADJUSTMENT_COUNTER": {
          "type": "NUMBER(2)",
          "nullable": false
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "DISCONTINUE_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "FREQUENCY": {
          "type": "VARCHAR2(7)",
          "nullable": false
        },
        "TRAFFIC_RESTRICTION": {
          "type": "CHAR(1)",
          "nullable": true
        },
        "SRC_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion."
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
      "fk_tables": [
        "INTERIM_FLIGHT",
        "QUOTE_COST_OPTION_SHIPMENT",
        "REPETITION_SCHEDULE"
      ]
    }
  }
};
