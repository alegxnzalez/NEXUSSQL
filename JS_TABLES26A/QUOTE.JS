// QUOTE.js

window.QUOTE = {
  "tables": {
    "QUOTE": {
      "description": "Defines the QUOTE business object",
      "columns": {
        "QUOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the quote."
},
        "QUOTE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the quote."
},
        "REQUEST_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date that you received the request for the quote from the customer. If you leave this field blank, it defaults to the date that the quote is created."
},
        "ISSUE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the quote was sent to the customer."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Identifies the last day the quote is valid."
},
        "ORIGIN_LOCATION_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Type of location for the source location - equivalent to location role. Examples would include: Port, Rail Ramp etc. This limits the location search to these specific types of locations. The default Location Type is Location Code for both the Origin and Destination."
},
        "ORIGIN_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the origin/source location."
},
        "ORIGIN_ADDRESS_LINE1": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Origin location address line 1 value."
},
        "ORIGIN_ADDRESS_LINE2": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Origin location address line 2 value."
},
        "ORIGIN_ADDRESS_LINE3": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Origin location address line 3 value."
},
        "ORIGIN_CITY": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "info": "Origin location city value."
},
        "ORIGIN_PROVINCE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Origin location province value."
},
        "ORIGIN_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Origin location country code value."
},
        "ORIGIN_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "Origin location postal code value."
},
        "VIA_ORIGIN_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "If applicable, the GID for the origin via location."
},
        "DESTINATION_LOCATION_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Type of location for the destination location - equivalent to location role. Examples would include: Port, Rail Ramp etc. This limits the location search to these specific types of locations. The default Location Type is Location Code for both the Destination and Destination."
},
        "DESTINATION_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the destination location."
},
        "DESTINATION_ADDRESS_LINE1": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Destination location address line 1 value."
},
        "DESTINATION_ADDRESS_LINE2": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Destination location address line 2 value."
},
        "DESTINATION_ADDRESS_LINE3": {
          "type": "VARCHAR2(55)",
          "nullable": true,
          "info": "Destination location address line 3 value."
},
        "DESTINATION_CITY": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "info": "Destination location city value."
},
        "DESTINATION_PROVINCE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Destination location province value."
},
        "DESTINATION_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Destination Location country code value."
},
        "DESTINATION_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "Destination location postal code value."
},
        "VIA_DESTINATION_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Job consolidation type to be used when determining the NFRC rules that may apply to this quote rate inquiry."
},
        "IS_HAZARDOUS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag indicating if the quote is for a shipment that contains hazardous material."
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "B",
                    "S",
                    "A"
          ],
          "info": "Perspective - buy or sell side."
},
        "QUOTE_OPTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "O",
                    "E",
                    "C"
          ],
          "info": "Select Optimize, Equipment Groups, or Equipment Configuration. Optimize returns quotes that match the search criteria. This is the default setting. Equipment Groups limit the search to specific Equipment Groups. When you select this option, an Equipment Group field appears where you can enter or search for an Equipment Group. Use the Save button to enter multiple Equipment Groups. Equipment Configuration works like the Equipment Groups option, but it provides you with a field to enter the number of Equipment Groups you require."
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The GID for the transport mode to for the quote. Select the mode that you want the master leg of the shipment to be transported on. The values in this drop-down list match the Transport Modes defined in Power Data."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The GID for the service provider for the quote. Enter the service provider that you want to use for the master leg of the shipment. The values available in this field match what is defined in the Service Provider Manager."
},
        "AVAILABLE_BY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the freight will be available by if the shipment will not be available to ship until a certain date."
},
        "DELIVER_BY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the freight must be delivered by if the shipment must be delivered by a certain date."
},
        "ORIGIN_SEARCH_VALUE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Origin rate search value."
},
        "DESTINATION_SEARCH_VALUE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Destination rate search value."
},
        "IS_CUSTOMER_RATES_ONLY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag to limit search to customer specific rates only."
},
        "CONSOLIDATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_TYPE",
          "info": "Job consolidation type to be used when determining the NFRC rules that may apply to this quote rate inquiry."
},
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM",
          "info": "The GID for the Incoterm for the shipment. This can limit the itineraries considered."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
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
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "This column will identifies the rows which will be purged."
}
      },
      "fk_tables": [
        "ORDER_RELEASE",
        "QUOTE_COST_OPTION",
        "QUOTE_EQUIPMENT_GROUP",
        "QUOTE_INVOLVED_PARTY",
        "QUOTE_REFNUM",
        "QUOTE_REMARK",
        "QUOTE_SHIP_UNIT",
        "QUOTE_STATUS",
        "QUOTE_TEXT",
        "QUOTE_TR_EVENT_CONTACT",
        "QUOTE_WKF_NOTE"
]
    }
  }
};