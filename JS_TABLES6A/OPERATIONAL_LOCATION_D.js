// OPERATIONAL_LOCATION_D.js

window.OPERATIONAL_LOCATION_D = {
  "tables": {
    "OPERATIONAL_LOCATION_D": {
      "columns": {
        "OPERATIONAL_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OPERATIONAL_LOCATION",
          "info": "The GID for the operational location. "
        },
        "SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence to allow multiple data records for the same operational location. "
        },
        "PRIMARY_LEG_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV",
          "info": "The service provider of the main leg which will help indicate which operational location applies. "
        },
        "PRIMARY_LEG_LOC_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "The location on the main leg which will help indicate which operational location applies; usually Port of Exit or Port of Discharge. "
        },
        "INBOUND_OUTBOUND_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "I",
            "O",
            "B"
          ],
          "info": "Indicates whether this operational location for the mapping of the service provider and location profile is used for importing (I), exporting (E), or both (B). "
        },
        "INCLUSION_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "If set, this operational location is applicable only when the opposite endpoint of the shipment is within the region. "
        },
        "EXCLUSION_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "If set, this operational location is not applicable when the opposite endpoint of the shipment is within the region. "
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
      "fk_tables": []
    }
  }
};
