// INTERIM_FLIGHT_INSTANCE.js

window.INTERIM_FLIGHT_INSTANCE = {
  "tables": {
    "INTERIM_FLIGHT_INSTANCE": {
      "description": "This table is similar to the Flight_Instance table. It stores the actual flight information (at day level) associated with the Interim_Flight table.",
      "columns": {
        "FLIGHT_INSTANCE_ID": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "FLIGHT_INSTANCE"
},
        "FLIGHT_NUMBER": {
          "type": "VARCHAR2(6)",
          "nullable": false,
          "key_value": true,
          "info": "FLIGHT_NUMBER contains the airline flight number for the interim flight."
},
        "RECORD_CODE": {
          "type": "NUMBER(2)",
          "nullable": false,
          "key_value": true
},
        "LEAVE_TIME_STAMP": {
          "type": "DATE",
          "nullable": false,
          "info": "LEAVE_TIME_STAMP contains the departure time of the interim flight."
},
        "ARRIVAL_TIME_STAMP": {
          "type": "DATE",
          "nullable": false,
          "info": "ARRIVAL_TIME_STAMP contains the date of the arrival of the interim flight."
},
        "SRC_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "SRC_LOCATION_GID contains the unique identifier for the source location for the interim flight."
},
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "DEST_LOCATION_GID contains the unique identifier for the destination location for the interiim flight."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV",
          "info": "SERVPROV_GID contains the unique identifier for the service provider."
},
        "SERVICE_CLASS": {
          "type": "VARCHAR2(2)",
          "nullable": true
},
        "STOP_COUNT": {
          "type": "NUMBER(1)",
          "nullable": true
},
        "VEHICLE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "VEHICLE_TYPE",
          "info": "VEHICLE_TYPE_GID references the vehicle_type table."
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