// CONDITIONAL_BOOKING_FIELD.js

window.CONDITIONAL_BOOKING_FIELD = {
  "tables": {
    "CONDITIONAL_BOOKING_FIELD": {
      "columns": {
        "CONDITIONAL_BOOKING_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CONDITIONAL_BOOKING_FIELD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CONDITIONAL_BOOKING_FIELD_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "BEAN_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "BEAN_FIELD": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "DATA_TYPE": {
          "type": "VARCHAR2(55)",
          "nullable": false,
          "values": [
            "S",
            "B",
            "I",
            "N",
            "D",
            "G",
            "U",
            "C",
            "P"
          ],
          "info": "The available values of this column should be the same as these defined in Planning_parameter_qualifer, i.e. S/B/I/N/D/G/U/C/P. "
        },
        "UOM_TYPE": {
          "type": "VARCHAR2(55)",
          "nullable": true
        },
        "UPDATE_FIELD_NAME": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "this column capture the names of update field.  The convention is . , i.e., SHIPMENT.TOTAL_VOLUME.  Multiple values separated by comma are allowed."
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
        "IS_STOP_RELATED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        }
      },
      "fk_tables": [
        "CONDITIONAL_BOOKING_PROF_D",
        "TENDER_COLLAB_CB_FIELD"
      ]
    }
  }
};
