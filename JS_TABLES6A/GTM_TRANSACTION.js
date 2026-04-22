// GTM_TRANSACTION.js

window.GTM_TRANSACTION = {
  "tables": {
    "GTM_TRANSACTION": {
      "columns": {
        "GTM_TRANSACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the GTM trade transaction. "
        },
        "GTM_TRANSACTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external identifier (XID) for the GTM trade transaction. "
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "A data query type represents different business objects. "
        },
        "OBJECT_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The object ID. "
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Marks the condition or state of the GTM trade transaction using colors. "
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM trade transaction using images. It is a foreign key reference to ICON table. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM trade transaction using images. It is a foreign key reference to ICON table. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM trade transaction using images. It is a foreign key reference to ICON table. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM trade transaction using images. It is a foreign key reference to ICON table. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM trade transaction using images. It is a foreign key reference to ICON table. "
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
        "CARRIER_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The carrier code. "
        },
        "CONVEYANCE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Name of the vessel used for the border movement GTM trade transaction. "
        },
        "CONVEYANCE_FLAG": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Flag of the vessel used for the border movement GTM trade transaction. "
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "Transport mode used for the border movement GTM trade transaction. It is a foreign key reference to the TRANSPORT_MODE table. "
        },
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM",
          "info": "Incoterm used for the GTM trade transaction. It is a foreign key reference to the INCO_TERM table. "
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the GTM trade transaction has been marked to be purged. "
        },
        "INCO_TERM_LOCATION": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Incoterm location used for the GTM trade transaction. "
        },
        "IS_HAZARDOUS_CARGO": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the goods on the GTM trade transaction are hazardous. "
        },
        "GTM_CONSOL_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSOL_CRITERIA",
          "info": "N/A "
        },
        "IS_SHIPMENT_CREATED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if a GTM declaration has been created for this GTM trade transaction. "
        },
        "GTM_TRANSACTION_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "values": [
            "TRANSACTION",
            "SHIPMENT"
          ],
          "info": "Specifies if the object is a GTM trade transaction or a GTM declaration. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "GTM_TRANSACTION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TRANSACTION_TYPE",
          "info": "The transaction type ID across all domains. This is a foreign key to GTM_TRANSACTION_TYPE table. "
        },
        "GTM_DECLARATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DECLARATION_TYPE",
          "info": "The declaration type ID across all domains. Which is a foreign key to GTM_DECLARATION_TYPE table. "
        },
        "GTM_BOND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_BOND",
          "info": "The bond or guarantee used for the import duties and taxes of the GTM trade transaction. "
        },
        "REQ_BS_STATUS_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_GROUP",
          "info": "This column refers to the Status Group of the request status of custom filing of a declaration. It is a foreign key reference to the BS_STATUS_GROUP table. "
        },
        "REQ_BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "This column refers to the Status Code of the request for customs filing of a declaration. It is a foreign key reference to the BS_STATUS_CODE table. "
        },
        "RESP_BS_STATUS_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_GROUP",
          "info": "This column refers to the Status Group of the response status received after custom filing of a declaration. It is a foreign key reference to the BS_STATUS_GROUP table. "
        },
        "RESP_BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "This column refers to the Status Code of the response received after customs filing of a declaration. It is a foreign key reference to the BS_STATUS_CODE table. "
        },
        "GTM_DECL_S_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DECL_S_TYPE",
          "info": "The Declaration Sub Type ID. It is foreign key reference to GTM_DECL_S_TYPE table. "
        },
        "GTM_TRADE_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TRADE_PREFERENCE",
          "info": "The Trade Preference ID which is the tariff treatment of the goods. It is a foreign key reference to GTM_TRADE_PREFERENCE table. "
        },
        "GTM_PROCEDURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROCEDURE",
          "info": "This is the customs procedure being requested for this declaration. Examples include Inward Processing Procedure in the EU or Consumption - Foreign Trade Zone in the US. It is a foreign key to GTM_PROCEDURE. "
        },
        "GTM_PRIOR_PROCEDURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROCEDURE",
          "info": "Specifies the previous customs procedure that occurred before the current one. For example, before your goods are released for free circulation, they may have entered a bonded warehouse first. This field is used to indicate the entry into the bonded warehouse. It is a foreign key reference to GTM_PROCEDURE. "
        },
        "GTM_PROCEDURE_DETAIL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROCEDURE_DETAIL",
          "info": "The procedure detail GID. "
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "The Exchange Rate ID to be used for value conversion while preparing the declaration. It is foreign key reference to EXCHANGE_RATE table. "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Exchange Rate date to be used for value conversion while preparing the declaration. "
        },
        "CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency in which values should be sent for filing. It is foreign key reference to CURRENCY table. "
        },
        "LOGIC_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_CONFIG",
          "info": "The declaration configuration details that were used to build declaration from transactions or transaction lines. "
        },
        "INLAND_CONVEYANCE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The inland conveyance name. "
        },
        "INLAND_CONVEYANCE_FLAG": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The inland conveyance flag. "
        },
        "INLAND_TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The inland transport mode. Which is a foreign key to TRANSPORT_MODE table. "
        },
        "DEPARTURE_CONVEYANCE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The departure conveyance name. "
        },
        "DEPARTURE_CONVEYANCE_FLAG": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The departure conveyance flag. "
        },
        "DEPART_TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The departure transport mode. Which is a foreign key to TRANSPORT_MODE table. "
        },
        "GTM_VALUATION_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_VALUATION_METHOD",
          "info": "The valuation method ID. "
        },
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
        }
      },
      "fk_tables": [
        "GTM_TRANSACTION_CODE",
        "GTM_TRANSACTION_CONVEYANCE",
        "GTM_TRANSACTION_DATE",
        "GTM_TRANSACTION_INVOLVED_PARTY",
        "GTM_TRANSACTION_INV_LOCATION",
        "GTM_TRANSACTION_LINE",
        "GTM_TRANSACTION_POLICY",
        "GTM_TRANSACTION_PORT",
        "GTM_TRANSACTION_QUANTITY",
        "GTM_TRANSACTION_REFERENCE",
        "GTM_TRANSACTION_REMARK",
        "GTM_TRANSACTION_REQDOC",
        "GTM_TRANSACTION_STATUS",
        "GTM_TRANSACTION_VALUE",
        "GTM_TRANS_REFNUM"
      ]
    }
  }
};
