// RATE_SERVICE_ACCESSORIAL_TIME.js

window.RATE_SERVICE_ACCESSORIAL_TIME = {
  "tables": {
    "RATE_SERVICE_ACCESSORIAL_TIME": {
      "description": "Stores additional add-on time based on accessorial code that extends the shipment service time.",
      "columns": {
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_SERVICE",
          "info": "Refers to the rate service the accessorial time is based on."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The accessorial that the extra time is associated with. E.g., if the accessorial time is option building time, then the accessorial_code is the body option code, like 'SUNROOF' or 'CD-PLAYER'."
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "X_LANE",
          "info": "Geographic information of where the extra time needed for the accessorial is associated"
},
        "ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTIVITY",
          "info": "Used in conjunction with the calendar on location or rate service to determine how to extend the service time."
},
        "FIXD_ACCESSORIAL_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Contractual add-on time on top of service time associated with accessorial_code_gid."
},
        "FIXD_ACCESSORIAL_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the fixed accessorial time"
},
        "FIXD_ACCESSORIAL_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The fixed accessorial time in base units"
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