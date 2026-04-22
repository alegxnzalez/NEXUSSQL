// CHARTER_VOYAGE.js

window.CHARTER_VOYAGE = {
  "tables": {
    "CHARTER_VOYAGE": {
      "columns": {
        "CHARTER_VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "the unique identifier "
        },
        "CHARTER_VOYAGE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CHARTER_VOYAGE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "CHARTERED",
            "LINER"
          ]
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV",
          "info": "service provider of this voyage "
        },
        "VOYAGE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "name of the voyage "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "the loading port of the voyage "
        },
        "DEPARTURE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "the time this voyage departs at the load port "
        },
        "ESTIMATED_DEPARTURE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "estimated departure time at the loading port "
        },
        "ACTUAL_DEPARTURE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "actual departure time at the loading port "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION"
        },
        "ARRIVAL_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "ESTIMATED_ARRIVAL_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "ACTUAL_ARRIVAL_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "VESSEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VESSEL"
        },
        "VOYAGE_PROJECT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "PROJECT_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CAPACITY_COMMIT_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CAPACITY_COMMIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "CAPACITY_COMMIT_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "BOOKING_FREEZE_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "BOOKING_FREEZE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "BOOKING_FREEZE_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_CANCELLED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "FEEDER_VESSEL": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes for the object. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes for the object. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes for the object. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes for the object. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes for the object."
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
        "CHARTER_VOYAGE_INVOLVED_PARTY",
        "CHARTER_VOYAGE_REFNUM",
        "CHARTER_VOYAGE_STOWAGE",
        "CONSOL"
      ]
    }
  }
};
