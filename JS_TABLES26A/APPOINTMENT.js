// APPOINTMENT.js

window.APPOINTMENT = {
  "tables": {
    "APPOINTMENT": {
      "description": "Storing information of shipment appointment, including fixed appointments, feasible appointments and infeasible appointments.  It also stores any blocked appointment time.",
      "columns": {
        "APPOINTMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the location resource appointment."
},
        "APPOINTMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the location resource appointment."
},
        "LOCATION_RESOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION_RESOURCE",
          "info": "The GID for the location resource."
},
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The shipment stop number."
},
        "APPOINTMENT_START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Appointment start time."
},
        "APPOINTMENT_END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Appointment end time."
},
        "IS_FEASIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the appointment is feasible."
},
        "IS_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If the shipment has arrived at the stop, the appointment will be fixed."
},
        "IS_BLOCKED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the appointment time slot is blocked."
},
        "CONFIRMATION_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The appointment confirmation number."
},
        "INFEASIBLE_REASON": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "If the appointment is not feasible, this is the reason for it."
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "The GID of the data query type. Valid values in this column are SHIPMENT and SHIPMENT GROUP."
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for the shipment or shipment group object."
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "When it is set to 'Y', this row and its child data will be purged."
},
        "APPOINTMENT_ACTIVITY_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
                    "DROP",
                    "LIVE"
          ],
          "info": "Specifies if the trailer scheduled for the appointment is attached to the truck (Live) or being dropped (Drop). This field is for information purposes."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "SCHEDULE_METHOD": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Schedule methods are determined automatically based on how the appointment was scheduled.  Automatic: The appointment is automatically scheduled via agent action. Manual: The appointment is scheduled via Dock Manager UI by a user. Integration: The appointment is scheduled via integration."
},
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "S_EQUIPMENT",
          "info": "The GID for the equipment associated with the shipment."
},
        "FLEX_COMMODITY_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The user-defined commodity code for the shipment ship unit."
}
      },
      "fk_tables": [
        "APPOINTMENT_REMARK"
]
    }
  }
};