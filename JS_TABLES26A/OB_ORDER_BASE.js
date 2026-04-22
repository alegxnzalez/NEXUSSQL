// OB_ORDER_BASE.js

window.OB_ORDER_BASE = {
  "tables": {
    "OB_ORDER_BASE": {
      "description": "This is the base table that defines the orders. An order base can have multiple origins, destinations, different times etc. Multiple order releases can be created against one order base. In the XML side, the TransOrder(Transportation Order) is similar to Order base.",
      "columns": {
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the order base."
},
        "ORDER_BASE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the order base."
},
        "EXTERNAL_SYSTEM_ID": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The identifier for the external system that provided the base order. For example a user's Oracle or other ERP system could be providing the order IDs."
},
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The payment method GID contains the GID for the payment method code for the order. Examples of payment method include electronic fund transfer and cash on delivery."
},
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM",
          "info": "The INCO term GID contains the GID for the incoterms associated with the order base."
},
        "TERM_LOCATION_TEXT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The term location text contains additional information related to the incoterms for the order."
},
        "PLANNING_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PLANNING_GROUP",
          "info": "The planning group GID used to group orders into different bulk planning waves."
},
        "FIXED_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "The fixed buy side itinerary GID can be defined to force the order release to be schedule with a constrained itinerary. This value is copied to any associated order releases."
},
        "ORDER_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_TYPE",
          "info": "The order type GID contains the unique identifier for the order type. Examples of order types include: CUSTOMER_ORDERS INTERFACILITY RETURNS INTEGRATION WEB"
},
        "TIME_WINDOW_EMPHASIS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_WINDOW_EMPHASIS",
          "info": "The time window emphasis GID contains the unique identifier to tell the planning engine whether early or late (or both) pickup and delivery times are important when creating a shipment."
},
        "RATE_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE_PROFILE",
          "info": "The buy rate service profile GID can be defined to force the order release to be schedule with a constrained rate service profile. This value is copied to any associated order releases."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The buy service provider GID can be defined to force the order release to be schedule with a constrained service provider. This value is copied to any associated order releases."
},
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The buy service provider profile GID can be defined to force the order release to be schedule with a constrained  service provider profile. This value is copied to any associated order releases."
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The buy transport mode GID can be defined to force the order release to be schedule with a constrained  transport mode. This value is copied to any associated order releases."
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "The buy mode profile GID can be defined to force the order release to be schedule with a constrained  transport mode profile. This value is copied to any associated order releases."
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The buy equipment group GID can be defined to force the order release to be schedule with a constrained equipment group. This value is copied to any associated order releases."
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The buy equipment group profile GID can be defined to force the order release to be schedule with a constrained equipment group profile. This value is copied to any associated order releases."
},
        "PROCESSING_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PROCESSING_CODE",
          "info": "A unique pointer to define the processing codes in the system. The system has only one processing code, 'PLN', which means to plan the shipment from the order release."
},
        "SHIP_WITH_GROUP": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Currently not supported. Ship with group is on the order base ship unit and order base line level."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Effective date of the order."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date of the order."
},
        "CR_TS": {
          "type": "DATE",
          "nullable": true,
          "info": "A timestamp for order base processing."
},
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Y/N flag to identify if this order is just a template and order base (s) can be created out of it."
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The buy rate offering GID can be defined to force the order release to be schedule with a constrained rate offering. This value is copied to any associated order releases."
},
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The buy rate geography details GID can be defined to force the order release to be schedule with a constrained rate detail. This value is copied to any associated order releases."
},
        "SELL_RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The sell rate offering GID can be defined to force the order release to be schedule with a constrained rate offering. This value is copied to any associated order releases."
},
        "SELL_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The sell rate geography details GID can be defined to force the order release to be schedule with a constrained rate detail. This value is copied to any associated order releases."
},
        "FIXED_SELL_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "The fixed buy side itinerary GID can be defined to force the order release to be schedule with a constrained itinerary This value is copied to any associated order releases."
},
        "TOTAL_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total gross weight calculated from the order base lines."
},
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total gross weight unit of measure."
},
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total gross weight in the base unit of measure."
},
        "TOTAL_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total gross volume calculated from the order base lines."
},
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total gross volume unit of measure."
},
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total gross volume in the base unit of measure."
},
        "MUST_SHIP_DIRECT": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Y/N indicator for whether this order release must ship direct."
},
        "MUST_SHIP_THRU_X_DOCK": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Y/N indicator for whether this order release must ship through cross dock."
},
        "MUST_SHIP_THRU_POOL": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Y/N indicator for whether this order release must ship through pool."
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "An indicator field that can be set to display important information about the order base."
},
        "IS_KNOWN_SHIPPER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Y/N indicator for whether the shipper involved party is a known shipper for air travel."
},
        "RELEASE_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RELEASE_METHOD",
          "info": "The release method GID is the order configuration rule and this drives the configuration of the order such as ship unit or line as well as various calculations."
},
        "TOTAL_NET_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total net weight calculated from the order release lines."
},
        "TOTAL_NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total net weight unit of measure."
},
        "TOTAL_NET_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total net weight in the base unit of measure."
},
        "TOTAL_NET_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total net volume calculated from the order release lines."
},
        "TOTAL_NET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total net volume unit of measure."
},
        "TOTAL_NET_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total net volume in the base unit of measure."
},
        "DIM_RATE_FACTOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DIM_RATE_FACTOR",
          "info": "The dim factor to be used when allocating by dimensional weight for a business unit and rate calculations."
},
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the order base."
},
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the order base."
},
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the order base."
},
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the order base."
},
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the order base."
},
        "BUNDLING_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "AUTOMATIC",
                    "MANUAL ONLY",
                    "DO NOT BUNDLE"
          ],
          "info": "The bundling type is automatic or manual only allow bundling; they are distinguished only by user defined queries.  Bundling type of do not bundle means order will never be bundled with other orders."
},
        "TOTAL_DECLARED_VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The total declared value calculated from the order base lines."
},
        "TOTAL_DECLARED_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The total declared value currency identifier."
},
        "TOTAL_DECLARED_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The total declared value in the base currency."
},
        "SELL_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The sell service provider GID can be defined to force the order release to be schedule with a constrained service provider. This value is copied to any associated order releases."
},
        "SELL_SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The sell service provider profile GID can be defined to force the order release to be schedule with a constrained service provider profile. This value is copied to any associated order releases."
},
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE",
          "info": "The buy rate service GID can be defined to force the order release to be schedule with a constrained rate service. This value is copied to any associated order releases."
},
        "DEFAULT_STOWAGE_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STOWAGE_MODE",
          "info": "The default stowage mode to use for this order when loading onto stowage consol shipments."
},
        "STUFF_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location for stuffing (loading) the container prior to shipping."
},
        "DESTUFF_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location for destuffing (unloading) the container after the ocean move."
},
        "CUSTOMER_UNITIZATION_REQUEST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "The customer's request for unitization location."
},
        "UNITIZATION_CONDITION_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The unitization (loading of equipment) condition name value."
},
        "IS_IGNORE_LOCATION_CALENDAR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Y/N indicator for whether to ignore the source and destination calendar when planning the order."
},
        "PICKUP_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_SEQUENCE",
          "info": "The pickup location routing sequence that controls how the stops can be planned for pickup such as first, absolute first, last."
},
        "DROPOFF_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_SEQUENCE",
          "info": "The dropoff location routing sequence that controls how the stops can be planned for pickup such as first, absolute first, last."
},
        "PRIORITY": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "The priority value assigned to the order base."
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Y/N indicator field, when it is set to 'Y', this row and its child data will be purged."
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
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150)"
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
},
        "ATTRIBUTE_CURRENCY1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER"
},
        "ATTRIBUTE_CURRENCY1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The attribute currency1 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table."
},
        "ATTRIBUTE_CURRENCY1_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The attribute currency1 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table."
},
        "ATTRIBUTE_CURRENCY2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The attribute currency of the shipment."
},
        "ATTRIBUTE_CURRENCY2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The attribute currency2 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table."
},
        "ATTRIBUTE_CURRENCY2_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The attribute currency2 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table."
},
        "ATTRIBUTE_CURRENCY3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The attribute currency of the shipment."
},
        "ATTRIBUTE_CURRENCY3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The attribute currency3 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table."
},
        "ATTRIBUTE_CURRENCY3_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The attribute currency3 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table."
}
      },
      "fk_tables": [
        "ALLOCATION_OB_LINE",
        "OBS_STATUS_HISTORY",
        "OBS_STATUS_HISTORY_EVENT_GROUP",
        "OB_ACCESSORIAL",
        "OB_INVOLVED_PARTY",
        "OB_LEG_CONSTRAINT",
        "OB_LINE",
        "OB_LINK",
        "OB_ORDER_BASE_STATUS",
        "OB_REFNUM",
        "OB_RELEASE_INSTRUCTION",
        "OB_REMARK",
        "OB_SHIP_UNIT",
        "OB_SPECIAL_SERVICE",
        "OB_SU_RELEASE_INSTRUCTION",
        "OB_TEXT",
        "OB_TR_EVENT_CONTACT",
        "OMR",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LINE",
        "SHIPMENT",
        "S_SHIP_UNIT_LINE"
]
    }
  }
};