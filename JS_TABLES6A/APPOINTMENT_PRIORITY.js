// APPOINTMENT_PRIORITY.js

window.APPOINTMENT_PRIORITY = {
  "tables": {
    "APPOINTMENT_PRIORITY": {
      "columns": {
        "APPOINTMENT_PRIORITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identifier of appointment priority. "
        },
        "APPOINTMENT_PRIORITY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID of appointment priority. "
        },
        "PRIORITY_RANKING": {
          "type": "NUMBER(6)",
          "nullable": false,
          "info": "The ranking of the priority.  Usually the lower of the number the higher of the priority. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Provide description to the appointment priority."
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
        "SHIPMENT",
        "SHIP_GROUP"
      ]
    }
  }
};
