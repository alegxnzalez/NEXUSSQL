// VOYLOC.js

window.VOYLOC = {
  "tables": {
    "VOYLOC": {
      "columns": {
        "VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VOYAGE",
          "info": "The GID for the voyage. "
        },
        "SEQ_NO": {
          "type": "NUMBER(4)",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number for the location of the voyage. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "The GID for the location of the voyage. "
        },
        "D_OR_A": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "D",
            "A"
          ],
          "info": "Defines whether the location is a pickup (D) or delivery (A) point for the voyage. "
        },
        "D_OR_A_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The date for the pickup (D) or delivery (A) for the voyage. "
        },
        "ESTIMATED_D_OR_A_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The estimated date at port sometimes sent by a carrier. "
        },
        "ACTUAL_D_OR_A_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The actual date at port sometimes sent by carrier. "
        },
        "DATA_SOURCE_PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Partition key used to parse the data based on the data source. "
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
          "info": "Date and time of the most recent data update. "
        },
        "IS_TRANSLOAD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "For composite voyages. The transload point check box identifies the transload port in the rotation. The Transload check box is used by OTM to indicate a transload stop (the stop type will be \"T\" for transload.) "
        },
        "VOYAGE_SERVICE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VOYAGE_SERVICE_TYPE",
          "info": "The GID for the voyage service type. The Voyage Service Type ID field is the voyage service type of the operator of the leg. It is a validated field but is only used for information and documentation. The Voyage Service Type ID on the header is operational and used to link the voyage to the rate service. The voyage service type of the mother vessel should be the voyage service type on the header. "
        },
        "VOYAGE_DESCRIPTION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Voyage Description field is the voyage of the operator of the leg. This is for information only and is not a validated field. "
        },
        "VESSEL_DESCRIPTION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Vessel Description field is for further information about the vessel for the leg. It is for information only. "
        },
        "IS_MOTHER_VESSEL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "You can select the Mother check box to indicate that this is the mother vessel or \"vessel of record\" for the leg for customs."
        }
      },
      "fk_tables": []
    }
  }
};
