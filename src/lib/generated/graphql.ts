export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	money: any;
	timestamptz: any;
	uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['String']>;
	_gt?: InputMaybe<Scalars['String']>;
	_gte?: InputMaybe<Scalars['String']>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars['String']>;
	_in?: InputMaybe<Array<Scalars['String']>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars['String']>;
	_is_null?: InputMaybe<Scalars['Boolean']>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars['String']>;
	_lt?: InputMaybe<Scalars['String']>;
	_lte?: InputMaybe<Scalars['String']>;
	_neq?: InputMaybe<Scalars['String']>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars['String']>;
	_nin?: InputMaybe<Array<Scalars['String']>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars['String']>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars['String']>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars['String']>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars['String']>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars['String']>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars['String']>;
};

/** products cart! */
export type Cart = {
	__typename?: 'cart';
	created_at: Scalars['timestamptz'];
	id: Scalars['uuid'];
	/** An object relationship */
	product: Products;
	product_id: Scalars['uuid'];
	updated_at: Scalars['timestamptz'];
	/** An object relationship */
	user: Users;
	user_id: Scalars['uuid'];
};

/** aggregated selection of "cart" */
export type Cart_Aggregate = {
	__typename?: 'cart_aggregate';
	aggregate?: Maybe<Cart_Aggregate_Fields>;
	nodes: Array<Cart>;
};

/** aggregate fields of "cart" */
export type Cart_Aggregate_Fields = {
	__typename?: 'cart_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Cart_Max_Fields>;
	min?: Maybe<Cart_Min_Fields>;
};

/** aggregate fields of "cart" */
export type Cart_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Cart_Select_Column>>;
	distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cart" */
export type Cart_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Cart_Max_Order_By>;
	min?: InputMaybe<Cart_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cart" */
export type Cart_Arr_Rel_Insert_Input = {
	data: Array<Cart_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Cart_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cart". All fields are combined with a logical 'AND'. */
export type Cart_Bool_Exp = {
	_and?: InputMaybe<Array<Cart_Bool_Exp>>;
	_not?: InputMaybe<Cart_Bool_Exp>;
	_or?: InputMaybe<Array<Cart_Bool_Exp>>;
	created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	product?: InputMaybe<Products_Bool_Exp>;
	product_id?: InputMaybe<Uuid_Comparison_Exp>;
	updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	user?: InputMaybe<Users_Bool_Exp>;
	user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cart" */
export enum Cart_Constraint {
	/** unique or primary key constraint on columns "id", "user_id", "product_id" */
	CartPkey = 'cart_pkey'
}

/** input type for inserting data into table "cart" */
export type Cart_Insert_Input = {
	product_id?: InputMaybe<Scalars['uuid']>;
	user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Cart_Max_Fields = {
	__typename?: 'cart_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	product_id?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
	user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "cart" */
export type Cart_Max_Order_By = {
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	product_id?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cart_Min_Fields = {
	__typename?: 'cart_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	product_id?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
	user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "cart" */
export type Cart_Min_Order_By = {
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	product_id?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cart" */
export type Cart_Mutation_Response = {
	__typename?: 'cart_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Cart>;
};

/** on_conflict condition type for table "cart" */
export type Cart_On_Conflict = {
	constraint: Cart_Constraint;
	update_columns?: Array<Cart_Update_Column>;
	where?: InputMaybe<Cart_Bool_Exp>;
};

/** Ordering options when selecting data from "cart". */
export type Cart_Order_By = {
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	product?: InputMaybe<Products_Order_By>;
	product_id?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	user?: InputMaybe<Users_Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** select columns of table "cart" */
export enum Cart_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	ProductId = 'product_id',
	/** column name */
	UpdatedAt = 'updated_at',
	/** column name */
	UserId = 'user_id'
}

/** placeholder for update columns of table "cart" (current role has no relevant permissions) */
export enum Cart_Update_Column {
	/** placeholder (do not use) */
	Placeholder = '_PLACEHOLDER'
}

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['money']>;
	_gt?: InputMaybe<Scalars['money']>;
	_gte?: InputMaybe<Scalars['money']>;
	_in?: InputMaybe<Array<Scalars['money']>>;
	_is_null?: InputMaybe<Scalars['Boolean']>;
	_lt?: InputMaybe<Scalars['money']>;
	_lte?: InputMaybe<Scalars['money']>;
	_neq?: InputMaybe<Scalars['money']>;
	_nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
	__typename?: 'mutation_root';
	/** delete data from the table: "cart" */
	delete_cart?: Maybe<Cart_Mutation_Response>;
	/** delete single row from the table: "cart" */
	delete_cart_by_pk?: Maybe<Cart>;
	/** delete data from the table: "users" */
	delete_users?: Maybe<Users_Mutation_Response>;
	/** delete single row from the table: "users" */
	delete_users_by_pk?: Maybe<Users>;
	/** insert data into the table: "cart" */
	insert_cart?: Maybe<Cart_Mutation_Response>;
	/** insert a single row into the table: "cart" */
	insert_cart_one?: Maybe<Cart>;
	/** insert data into the table: "users" */
	insert_users?: Maybe<Users_Mutation_Response>;
	/** insert a single row into the table: "users" */
	insert_users_one?: Maybe<Users>;
	/** update data of the table: "users" */
	update_users?: Maybe<Users_Mutation_Response>;
	/** update single row of the table: "users" */
	update_users_by_pk?: Maybe<Users>;
	/** update multiples rows of table: "users" */
	update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_CartArgs = {
	where: Cart_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Cart_By_PkArgs = {
	id: Scalars['uuid'];
	product_id: Scalars['uuid'];
	user_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
	where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_CartArgs = {
	objects: Array<Cart_Insert_Input>;
	on_conflict?: InputMaybe<Cart_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Cart_OneArgs = {
	object: Cart_Insert_Input;
	on_conflict?: InputMaybe<Cart_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
	objects: Array<Users_Insert_Input>;
	on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
	object: Users_Insert_Input;
	on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
	_set?: InputMaybe<Users_Set_Input>;
	where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
	_set?: InputMaybe<Users_Set_Input>;
	pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
	updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
	/** in ascending order, nulls last */
	Asc = 'asc',
	/** in ascending order, nulls first */
	AscNullsFirst = 'asc_nulls_first',
	/** in ascending order, nulls last */
	AscNullsLast = 'asc_nulls_last',
	/** in descending order, nulls first */
	Desc = 'desc',
	/** in descending order, nulls first */
	DescNullsFirst = 'desc_nulls_first',
	/** in descending order, nulls last */
	DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "products" */
export type Products = {
	__typename?: 'products';
	amount: Scalars['money'];
	/** An array relationship */
	carts: Array<Cart>;
	/** An aggregate relationship */
	carts_aggregate: Cart_Aggregate;
	created_at: Scalars['timestamptz'];
	id: Scalars['uuid'];
	image?: Maybe<Scalars['String']>;
	name: Scalars['String'];
	updated_at: Scalars['timestamptz'];
	/** A computed field, executes function "user_cart_sum" */
	user_cart_sum?: Maybe<Scalars['money']>;
};

/** columns and relationships of "products" */
export type ProductsCartsArgs = {
	distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Cart_Order_By>>;
	where?: InputMaybe<Cart_Bool_Exp>;
};

/** columns and relationships of "products" */
export type ProductsCarts_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Cart_Order_By>>;
	where?: InputMaybe<Cart_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
	__typename?: 'products_aggregate';
	aggregate?: Maybe<Products_Aggregate_Fields>;
	nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
	__typename?: 'products_aggregate_fields';
	avg?: Maybe<Products_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Products_Max_Fields>;
	min?: Maybe<Products_Min_Fields>;
	stddev?: Maybe<Products_Stddev_Fields>;
	stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
	sum?: Maybe<Products_Sum_Fields>;
	var_pop?: Maybe<Products_Var_Pop_Fields>;
	var_samp?: Maybe<Products_Var_Samp_Fields>;
	variance?: Maybe<Products_Variance_Fields>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Products_Select_Column>>;
	distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
	avg?: InputMaybe<Products_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Products_Max_Order_By>;
	min?: InputMaybe<Products_Min_Order_By>;
	stddev?: InputMaybe<Products_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Products_Sum_Order_By>;
	var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
	variance?: InputMaybe<Products_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
	__typename?: 'products_avg_fields';
	amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
	_and?: InputMaybe<Array<Products_Bool_Exp>>;
	_not?: InputMaybe<Products_Bool_Exp>;
	_or?: InputMaybe<Array<Products_Bool_Exp>>;
	amount?: InputMaybe<Money_Comparison_Exp>;
	carts?: InputMaybe<Cart_Bool_Exp>;
	created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	image?: InputMaybe<String_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	user_cart_sum?: InputMaybe<Money_Comparison_Exp>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
	__typename?: 'products_max_fields';
	amount?: Maybe<Scalars['money']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	image?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
	amount?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	image?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
	__typename?: 'products_min_fields';
	amount?: Maybe<Scalars['money']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	image?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
	amount?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	image?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
	amount?: InputMaybe<Order_By>;
	carts_aggregate?: InputMaybe<Cart_Aggregate_Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	image?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	user_cart_sum?: InputMaybe<Order_By>;
};

/** select columns of table "products" */
export enum Products_Select_Column {
	/** column name */
	Amount = 'amount',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Image = 'image',
	/** column name */
	Name = 'name',
	/** column name */
	UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
	__typename?: 'products_stddev_fields';
	amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
	__typename?: 'products_stddev_pop_fields';
	amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
	__typename?: 'products_stddev_samp_fields';
	amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
	__typename?: 'products_sum_fields';
	amount?: Maybe<Scalars['money']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
	__typename?: 'products_var_pop_fields';
	amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
	__typename?: 'products_var_samp_fields';
	amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
	__typename?: 'products_variance_fields';
	amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
	amount?: InputMaybe<Order_By>;
};

export type Query_Root = {
	__typename?: 'query_root';
	/** An array relationship */
	cart: Array<Cart>;
	/** An aggregate relationship */
	cart_aggregate: Cart_Aggregate;
	/** fetch data from the table: "cart" using primary key columns */
	cart_by_pk?: Maybe<Cart>;
	/** fetch data from the table: "products" */
	products: Array<Products>;
	/** fetch aggregated fields from the table: "products" */
	products_aggregate: Products_Aggregate;
	/** fetch data from the table: "products" using primary key columns */
	products_by_pk?: Maybe<Products>;
	/** fetch data from the table: "users" */
	users: Array<Users>;
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?: Maybe<Users>;
};

export type Query_RootCartArgs = {
	distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Cart_Order_By>>;
	where?: InputMaybe<Cart_Bool_Exp>;
};

export type Query_RootCart_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Cart_Order_By>>;
	where?: InputMaybe<Cart_Bool_Exp>;
};

export type Query_RootCart_By_PkArgs = {
	id: Scalars['uuid'];
	product_id: Scalars['uuid'];
	user_id: Scalars['uuid'];
};

export type Query_RootProductsArgs = {
	distinct_on?: InputMaybe<Array<Products_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Products_Order_By>>;
	where?: InputMaybe<Products_Bool_Exp>;
};

export type Query_RootProducts_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Products_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Products_Order_By>>;
	where?: InputMaybe<Products_Bool_Exp>;
};

export type Query_RootProducts_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootUsersArgs = {
	distinct_on?: InputMaybe<Array<Users_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Users_Order_By>>;
	where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_Root = {
	__typename?: 'subscription_root';
	/** An array relationship */
	cart: Array<Cart>;
	/** An aggregate relationship */
	cart_aggregate: Cart_Aggregate;
	/** fetch data from the table: "cart" using primary key columns */
	cart_by_pk?: Maybe<Cart>;
	/** fetch data from the table: "products" */
	products: Array<Products>;
	/** fetch aggregated fields from the table: "products" */
	products_aggregate: Products_Aggregate;
	/** fetch data from the table: "products" using primary key columns */
	products_by_pk?: Maybe<Products>;
	/** fetch data from the table: "users" */
	users: Array<Users>;
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?: Maybe<Users>;
};

export type Subscription_RootCartArgs = {
	distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Cart_Order_By>>;
	where?: InputMaybe<Cart_Bool_Exp>;
};

export type Subscription_RootCart_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Cart_Order_By>>;
	where?: InputMaybe<Cart_Bool_Exp>;
};

export type Subscription_RootCart_By_PkArgs = {
	id: Scalars['uuid'];
	product_id: Scalars['uuid'];
	user_id: Scalars['uuid'];
};

export type Subscription_RootProductsArgs = {
	distinct_on?: InputMaybe<Array<Products_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Products_Order_By>>;
	where?: InputMaybe<Products_Bool_Exp>;
};

export type Subscription_RootProducts_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Products_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Products_Order_By>>;
	where?: InputMaybe<Products_Bool_Exp>;
};

export type Subscription_RootProducts_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootUsersArgs = {
	distinct_on?: InputMaybe<Array<Users_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Users_Order_By>>;
	where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
	id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['timestamptz']>;
	_gt?: InputMaybe<Scalars['timestamptz']>;
	_gte?: InputMaybe<Scalars['timestamptz']>;
	_in?: InputMaybe<Array<Scalars['timestamptz']>>;
	_is_null?: InputMaybe<Scalars['Boolean']>;
	_lt?: InputMaybe<Scalars['timestamptz']>;
	_lte?: InputMaybe<Scalars['timestamptz']>;
	_neq?: InputMaybe<Scalars['timestamptz']>;
	_nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
	__typename?: 'users';
	/** An array relationship */
	cart: Array<Cart>;
	/** An aggregate relationship */
	cart_aggregate: Cart_Aggregate;
	/** A computed field, executes function "user_cart_items" */
	cart_items?: Maybe<Array<Products>>;
	/** A computed field, executes function "user_cart_total" */
	cart_total?: Maybe<Scalars['money']>;
	created_at: Scalars['timestamptz'];
	id: Scalars['uuid'];
	name: Scalars['String'];
	updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "users" */
export type UsersCartArgs = {
	distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Cart_Order_By>>;
	where?: InputMaybe<Cart_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCart_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Cart_Order_By>>;
	where?: InputMaybe<Cart_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCart_ItemsArgs = {
	distinct_on?: InputMaybe<Array<Products_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Products_Order_By>>;
	where?: InputMaybe<Products_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
	_and?: InputMaybe<Array<Users_Bool_Exp>>;
	_not?: InputMaybe<Users_Bool_Exp>;
	_or?: InputMaybe<Array<Users_Bool_Exp>>;
	cart?: InputMaybe<Cart_Bool_Exp>;
	cart_items?: InputMaybe<Products_Bool_Exp>;
	cart_total?: InputMaybe<Money_Comparison_Exp>;
	created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
	/** unique or primary key constraint on columns "id" */
	UserPkey = 'user_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
	cart?: InputMaybe<Cart_Arr_Rel_Insert_Input>;
	name?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
	__typename?: 'users_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
	data: Users_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
	constraint: Users_Constraint;
	update_columns?: Array<Users_Update_Column>;
	where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
	cart_aggregate?: InputMaybe<Cart_Aggregate_Order_By>;
	cart_items_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
	cart_total?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
	name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
	/** column name */
	Name = 'name'
}

export type Users_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Users_Set_Input>;
	where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['uuid']>;
	_gt?: InputMaybe<Scalars['uuid']>;
	_gte?: InputMaybe<Scalars['uuid']>;
	_in?: InputMaybe<Array<Scalars['uuid']>>;
	_is_null?: InputMaybe<Scalars['Boolean']>;
	_lt?: InputMaybe<Scalars['uuid']>;
	_lte?: InputMaybe<Scalars['uuid']>;
	_neq?: InputMaybe<Scalars['uuid']>;
	_nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsQuery = {
	__typename?: 'query_root';
	products: Array<{ __typename?: 'products'; id: any; name: string; image?: string | null }>;
};

export type UserCartQueryVariables = Exact<{ [key: string]: never }>;

export type UserCartQuery = {
	__typename?: 'query_root';
	users: Array<{
		__typename?: 'users';
		cart_total?: any | null;
		cart_items?: Array<{
			__typename?: 'products';
			amount: any;
			id: any;
			name: string;
			user_cart_sum?: any | null;
			carts_aggregate: {
				__typename?: 'cart_aggregate';
				aggregate?: { __typename?: 'cart_aggregate_fields'; count: number } | null;
			};
		}> | null;
	}>;
};
