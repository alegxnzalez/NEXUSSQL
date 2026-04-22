// EQUIPMENT_CONVERSION.js

window.EQUIPMENT_CONVERSION = {
  "tables": {
    "EQUIPMENT_CONVERSION": {
      "columns": {
        "P_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_PROJECT"
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The equipment group that is being \"marked up\" if you will "
        },
        "CONVERSION_FACTOR": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The \"mark up\" on the equipemnt group. Example: There is a 12% markup if the carrier bids a 48 foot truck.  Specify 1.12 in this case."
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
