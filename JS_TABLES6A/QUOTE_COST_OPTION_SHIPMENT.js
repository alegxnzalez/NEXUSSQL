// QUOTE_COST_OPTION_SHIPMENT.js

window.QUOTE_COST_OPTION_SHIPMENT = {
  "tables": {
    "QUOTE_COST_OPTION_SHIPMENT": {
      "columns": {
        "QUOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE_COST_OPTION",
          "info": "The GID for the quote. "
        },
        "COST_OPTION_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE_COST_OPTION",
          "info": "Option Number: Each possible cost option is assigned an Option Number. "
        },
        "SHIPMENT_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "Internal sequence number for shipment information provide as part of the quote option. "
        },
        "IS_PRIMARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Primary check box is used to specify if this is the primary leg of the shipment. "
        },
        "ACTUAL_COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Actual cost. "
        },
        "ACTUAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the actual cost currency. "
        },
        "ACTUAL_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Actual cost in the base currency. "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The Start Time and End Time fields specify when the shipment must leave and arrive by. "
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The Start Time and End Time fields specify when the shipment must leave and arrive by. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The GID for the service provider that should be used. "
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The GID for the transport mode that should be used. "
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The GID for the rate offering that should be used. "
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The GID for the rate record that should be used. This rates the cost option leg for the given rate record. "
        },
        "FLIGHT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLIGHT",
          "info": "The GID for the flight that must be used. "
        },
        "RATE_FROM_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the rating from location. "
        },
        "RATE_TO_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the rating to location. "
        },
        "SOURCE_VIA_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the source via location. "
        },
        "DEST_VIA_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the destination via location. "
        },
        "VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VOYAGE",
          "info": "The GID for the voyage that must be used. "
        },
        "DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Distance. "
        },
        "DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Distance unit of measure. "
        },
        "DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Distance in the base unit of measure. "
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "B",
            "S"
          ],
          "info": "Perspective - Buy or Sell. "
        },
        "RATE_EXPIRATION": {
          "type": "DATE",
          "nullable": true,
          "info": "Expiration data of the rate. "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the source location. "
        },
        "SOURCE_LOCATION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Source location name. "
        },
        "SOURCE_ADDRESS_LINE1": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Source location address line 1 value. "
        },
        "SOURCE_ADDRESS_LINE2": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Source location address line 2 value. "
        },
        "SOURCE_ADDRESS_LINE3": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Source location address line 3 value. "
        },
        "SOURCE_CITY": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "info": "Source location city value. "
        },
        "SOURCE_PROVINCE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Source location province value. "
        },
        "SOURCE_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Source Location country code value. "
        },
        "SOURCE_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "Source location postal code value. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the Destination location. "
        },
        "DEST_LOCATION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Destination location name. "
        },
        "DESTINATION_ADDRESS_LINE1": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Destination location address line 1 value. "
        },
        "DESTINATION_ADDRESS_LINE2": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Destination location address line 2 value. "
        },
        "DESTINATION_ADDRESS_LINE3": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Destination location address line 3 value. "
        },
        "DESTINATION_CITY": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "info": "Destination location city value. "
        },
        "DESTINATION_PROVINCE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Destination location province value. "
        },
        "DESTINATION_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Destination Location country code value. "
        },
        "DESTINATION_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "Destination location postal code value. "
        },
        "SHIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT_TYPE",
          "info": "Indicates the shipment type for this quote cost option shipment. "
        },
        "NFRC_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NFRC_RULE",
          "info": "The NFRC rule used to create this shipment if it is an NFRC and was created by the system. "
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
        "QUOTE_COST_OPTION_SHIP_COST"
      ]
    }
  }
};
