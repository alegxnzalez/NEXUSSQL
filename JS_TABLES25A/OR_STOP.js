// OR_STOP.js

window.OR_STOP = {
  "tables": {
    "OR_STOP": {
      "columns": {
        "OR_STOP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the stop associated to the order release for multi-stop orders. "
        },
        "OR_STOP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the stop associated to the order release for multi-stop orders. "
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ORDER_RELEASE",
          "info": "The order release associated with this stop. "
        },
        "OR_STOP_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The stop number within the order release. Stop number = 1 is the pickup stop, and the max (stop number) for a shipment is the delivery stop. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "The location GID for the shipment stop. "
        },
        "EARLY_ARRIVAL_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The arrival date and time for the stop, and when IS_APPT is Y, this field is early appointment time. "
        },
        "LATE_ARRIVAL_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The late arrival date and time for the stop, and when "
        },
        "IS_APPT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N field indicating that the times are for appointments, when IS_APPT is Y, EARLY/LATE_ARRIVAL_TIME are appointment times. "
        },
        "IS_APPT_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N field to indicate if appointment is required. "
        },
        "IS_APPT_CONFIRM_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N field to indicate if appointment confirmation is required. "
        },
        "IS_APPT_CONFIRMED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N field to indicate the appointment is confirmed. "
        },
        "LEG_POSITION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "L",
            "F"
          ],
          "info": "Define where to insert this stop in a multi-stop situation. "
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
        "OR_STOP_REMARK",
        "OR_STOP_SPECIAL_SERVICE",
        "SHIP_UNIT"
      ]
    }
  }
};
