// DRIVER_ASSIGNMENT.js

window.DRIVER_ASSIGNMENT = {
  "tables": {
    "DRIVER_ASSIGNMENT": {
      "columns": {
        "DRIVER_ASSIGNMENT_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Driver assignment sequence number. "
        },
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DRIVER",
          "info": "The GID for the driver. "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT",
          "info": "The GID of the shipments assigned to the driver. "
        },
        "NEXT_AVAILABLE_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "The GID for the next available location (NAL) for the driver. "
        },
        "NEXT_AVAILABLE_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "The GID for the next available time (NAT) for the driver. "
        },
        "PREV_DRIVER_ASSIGNMENT_SEQ_NUM": {
          "type": "NUMBER()",
          "nullable": true,
          "foreign_key": "DRIVER_ASSIGNMENT",
          "info": "Refers to the previous driver assignment record for the driver. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Remarks or comments related to shipment(s) assigned to the driver. "
        },
        "IS_SYSTEM_GENERATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Check box indicating whether the shipment assigned was system generated. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": [
        "DRIVER_ASSIGNMENT",
        "DRIVER_HOS_RULE_STATE"
      ]
    }
  }
};
