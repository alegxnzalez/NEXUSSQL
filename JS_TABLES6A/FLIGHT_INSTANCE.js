// FLIGHT_INSTANCE.js

window.FLIGHT_INSTANCE = {
  "tables": {
    "FLIGHT_INSTANCE": {
      "columns": {
        "FLIGHT_INSTANCE_ID": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true
        },
        "LEAVE_TIMESTAMP": {
          "type": "DATE",
          "nullable": false
        },
        "ARRIVAL_TIMESTAMP": {
          "type": "DATE",
          "nullable": false
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
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion. "
        },
        "ELAPSED_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ELAPSED_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "ELAPSED_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "ELAPSED_TIME in base units. "
        },
        "FLIGHT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
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
        "CONSOL",
        "INTERIM_FLIGHT_INSTANCE",
        "SHIPMENT",
        "SHIPMENT_STOP"
      ]
    }
  }
};
